let username = '';
let currentSet = 0;
let currentQuestion = 0;
let currentSetScore = 0;
let totalScore = 0;
let selectedAnswer = '';
let timer;
let timeLeft;
let timerPaused = false;
let currentUserUID = null;
let setScores = [];
const PASSING_SCORE = 4;

const quizSets = quizData.quizSets;
const urlList = quizData.urlList;

function saveUserProgress() {
    const userProgress = {
        username: username,
        currentSet: currentSet,
        currentQuestion: currentQuestion,
        currentSetScore: currentSetScore,
        setScores: setScores,
        totalScore: totalScore,
        uid: currentUserUID
    };
    localStorage.setItem('quizUserProgress', JSON.stringify(userProgress));
}

function loadUserProgress() {
    const savedProgress = localStorage.getItem('quizUserProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        username = progress.username;
        currentSet = progress.currentSet;
        currentQuestion = progress.currentQuestion;
        currentSetScore = progress.currentSetScore;
        setScores = progress.setScores;
        totalScore = progress.totalScore;
        currentUserUID = progress.uid;
        return true;
    }
    return false;
}

function startQuizWithUsername() {
    if (loadUserProgress()) {
        document.getElementById('username-form').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        updateUserDisplay();
        showQuestion();
        updateProgress();
    } else {
        username = document.getElementById('username-input').value.trim();
        if (username) {
            document.getElementById('username-form').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            initializeUser(username);
        } else {
            alert('Please enter a username to start the quiz.');
        }
    }
}

function initializeUser(username) {
    const uid = generateUID();
    const userRef = database.ref('users/' + uid);
    userRef.set({
        username: username,
        score: 0,
        uid: uid
    }).then(() => {
        currentUserUID = uid;
        updateUserDisplay();
        startQuiz();
        saveUserProgress();
    }).catch((error) => {
        console.error("Error initializing user:", error);
        startQuiz();
    });
}

function generateUID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function updateUserDisplay() {
    const userDisplay = document.getElementById('user-display');
    userDisplay.innerHTML = `
        <span class="username">${username}</span>
        <span class="score" id="user-score">Score: ${totalScore}</span>
    `;
}

function updateUserScore(newScore) {
    if (currentUserUID) {
        const userRef = database.ref('users/' + currentUserUID);
        userRef.update({
            score: newScore
        }).then(() => {
            document.getElementById('user-score').textContent = `Score: ${newScore}`;
        }).catch((error) => {
            console.error("Error updating score:", error);
        });
    }
}

function startQuiz() {
    shuffleArray(quizSets);
    currentSet = 0;
    currentQuestion = 0;
    currentSetScore = 0;
    setScores = new Array(quizSets.length).fill(0);
    totalScore = 0;
    showQuestion();
    updateProgress();
    updateScoreDisplay();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuizSet = quizSets[currentSet];
    if (!currentQuizSet || !currentQuizSet[currentQuestion]) {
        console.error("Invalid quiz set or question");
        return;
    }
    const questionData = currentQuizSet[currentQuestion];

    let questionHTML = `
        <div class="question">
            <h2>${questionData.question}</h2>
            ${questionData.options.map((option, index) => `
                <button onclick="selectAnswer(this, '${option}')">${option}</button>
            `).join('')}
        </div>
        <button id="submit-btn" onclick="submitAnswer()">Submit Answer</button>
    `;

    questionContainer.innerHTML = questionHTML;
    updateProgress();
    timerPaused = false;
    startTimer();
    selectedAnswer = '';
}

function selectAnswer(button, answer) {
    selectedAnswer = answer;
    document.querySelectorAll('.question button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function submitAnswer() {
    clearInterval(timer);
    const currentQuizSet = quizSets[currentSet];
    if (currentQuizSet && selectedAnswer === currentQuizSet[currentQuestion].answer) {
        currentSetScore++;
    }

    moveToNextQuestion();
}

function moveToNextQuestion() {
    const currentQuizSet = quizSets[currentSet];
    currentQuestion++;

    if (currentQuizSet && currentQuestion < currentQuizSet.length) {
        showQuestion();
    } else {
        showScore();
    }
    updateProgress();
    updateScoreDisplay();
    saveUserProgress();
}

function showScore() {
    const scorePopup = document.getElementById('score-popup');
    const scoreText = document.getElementById('score-text');
    const popupContent = scorePopup.querySelector('.popup-content');
    const currentQuizSet = quizSets[currentSet];
    
    if (!currentQuizSet) {
        console.error("Current quiz set is undefined");
        return;
    }
    
    scoreText.textContent = `Your score for this set: ${currentSetScore} out of ${currentQuizSet.length}`;

    let emote = currentSetScore === currentQuizSet.length ? '🎉' : currentSetScore >= PASSING_SCORE ? '😊' : '😞';
    scoreText.textContent += ` ${emote}\nTotal score: ${totalScore}`;

    setScores[currentSet] = Math.max(setScores[currentSet], currentSetScore);
    totalScore = setScores.reduce((sum, score) => score >= PASSING_SCORE ? sum + score : sum, 0);
    updateUserScore(totalScore);

    // Update or create the action button (Retry Set or Next Set)
    let actionButton = popupContent.querySelector('button:not(#whatsapp-share)');
    if (!actionButton) {
        actionButton = document.createElement('button');
        popupContent.appendChild(actionButton);
    }
    
    if (currentSetScore < PASSING_SCORE) {
        actionButton.textContent = 'Retry Set';
        actionButton.onclick = () => {
            retrySet();
            openRandomUrl();
        };
    } else {
        actionButton.textContent = 'Next Set';
        actionButton.onclick = () => {
            nextSet();
            openRandomUrl();
        };
    }

    // Update or create the WhatsApp share button
    let shareButton = popupContent.querySelector('#whatsapp-share');
    if (!shareButton) {
        shareButton = document.createElement('button');
        shareButton.id = 'whatsapp-share';
        popupContent.appendChild(shareButton);
    }
    shareButton.textContent = 'Share on WhatsApp';
    shareButton.onclick = () => {
        const shareLink = generateWhatsAppShareLink(totalScore);
        window.open(shareLink, '_blank');
    };
    
    scorePopup.style.display = 'flex';
    updateScoreDisplay();
}

function generateWhatsAppShareLink(score) {
    const message = `I just scored ${score} in the Ultimate Interactive Quiz Challenge!\n 
    Think you can beat me?  Bring it on! \n
    25 sets of mind-bending questions await you. Each correct answer brings you closer to the top!\n
    Take the challenge now and see if you can outscore me: Play Now https://puzzle-challaege.pages.dev! \n
    Are you up for it? `;

    // Encode the entire message
    // const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/?text=${message}`;
};


function startTimer() {
    timeLeft = 10;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    timer = setInterval(() => {
        if (!timerPaused) {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                if (selectedAnswer !== '') {
                    submitAnswer();
                } else {
                    moveToNextQuestion();
                }
            }
        }
    }, 1000);
}

function pauseTimer() {
    timerPaused = true;
}

function resumeTimer() {
    timerPaused = false;
}

function handleVisibilityChange() {
    if (document.hidden) {
        pauseTimer();
    } else {
        resumeTimer();
    }
}

function retrySet() {
    currentQuestion = 0;
    currentSetScore = 0;
    document.getElementById('score-popup').style.display = 'none';
    showQuestion();
    updateProgress();
    updateScoreDisplay();
    saveUserProgress();
}

function nextSet() {
    currentSet++;
    if (currentSet < quizSets.length) {
        currentQuestion = 0;
        currentSetScore = 0;
        document.getElementById('score-popup').style.display = 'none';
        showQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = '<h2>Congratulations! You have completed all quiz sets.</h2>';
        document.getElementById('score-popup').style.display = 'none';
        localStorage.removeItem('quizUserProgress');
    }
    updateProgress();
    updateScoreDisplay();
    saveUserProgress();
}

function updateProgress() {
    const progressBar = document.getElementById('progress');
    const setInfo = document.getElementById('set-info');
    const currentQuizSet = quizSets[currentSet];
    if (!currentQuizSet) {
        console.error("Invalid quiz set");
        return;
    }
    const totalQuestions = currentQuizSet.length;
    const progress = ((currentQuestion) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    setInfo.textContent = `Set ${currentSet + 1} of ${quizSets.length} | Question ${currentQuestion + 1} of ${totalQuestions}`;
}

function updateScoreDisplay() {
    document.getElementById('user-score').textContent = `Score: ${totalScore}`;
}

function updateLeaderboard() {
    const leaderboardRef = database.ref('users');
    leaderboardRef.orderByChild('score').limitToLast(10).once('value', (snapshot) => {
        const leaderboardData = [];
        snapshot.forEach((childSnapshot) => {
            leaderboardData.unshift(childSnapshot.val());
        });
        displayLeaderboard(leaderboardData);
    });
}

function displayLeaderboard(leaderboardData) {
    const leaderboardElement = document.getElementById('leaderboard-list');
    leaderboardElement.innerHTML = '';
    
    leaderboardData.forEach((user, index) => {
        const listItem = document.createElement('li');
        let usernameDisplay = user.username;
        
        if (user.uid === currentUserUID) {
            usernameDisplay += ' (You)';
            listItem.classList.add('current-user');
        }
        
        listItem.innerHTML = `
            <span class="rank">#${index + 1}</span>
            <span class="username">${usernameDisplay}</span>
            <span class="score">${user.score}</span>
        `;
        leaderboardElement.appendChild(listItem);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function openRandomUrl() {
    console.log('Opening random URL');
    const randomIndex = Math.floor(Math.random() * urlList.length);
    const randomUrl = urlList[randomIndex];
    
    // Pause the timer
    pauseTimer();
    
    // Open the URL in a new tab
    window.open(randomUrl, '_blank');
}

function showLeaderboard() {
    document.getElementById('leaderboard-popup').style.display = 'block';
    updateLeaderboard();
    pauseTimer();
}

function hideLeaderboard() {
    document.getElementById('leaderboard-popup').style.display = 'none';
    resumeTimer();
}

function setupLeaderboardListeners() {
    document.getElementById('leaderboard-trigger').addEventListener('click', showLeaderboard);
    document.getElementById('close-leaderboard').addEventListener('click', hideLeaderboard);
}

function clearUserProgress() {
    localStorage.removeItem('quizUserProgress');
    location.reload();
}

window.onload = function() {
    const startButton = document.getElementById('start-quiz-btn');
    if (startButton) {
        startButton.addEventListener('click', startQuizWithUsername);
    } else {
        console.error("Start button not found!");
    }
    document.getElementById('score-popup').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    setupLeaderboardListeners();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (loadUserProgress()) {
        document.getElementById('username-form').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        updateUserDisplay();
        showQuestion();
        updateProgress();
        updateScoreDisplay();
    }
};

