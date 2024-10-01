# Ultimate Interactive Quiz Challenge

## Description

The Ultimate Interactive Quiz Challenge is an engaging web-based quiz application that tests users' knowledge across various topics. It features a timer for each question, a progress bar, and a live leaderboard to encourage competition among players.

## Features

- Multiple quiz sets with randomized questions
- Timed questions to add excitement
- Progress tracking within each set and across the entire quiz
- Live leaderboard to compare scores with other players
- Responsive design for both desktop and mobile devices
- Integration with Firebase for real-time data storage and retrieval

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase Realtime Database

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a modern web browser installed (Chrome, Firefox, Safari, or Edge)
- You have Node.js and npm installed (for running a local server and installing dependencies)
- You have basic knowledge of HTML, CSS, and JavaScript
- You have a Firebase account (for database functionality)

## Installation and Setup

1. Clone the repository or download the source code:
   ```
   git clone https://github.com/yourusername/ultimate-interactive-quiz-challenge.git
   ```

2. Navigate to the project directory:
   ```
   cd ultimate-interactive-quiz-challenge
   ```

3. Install http-server (if not already installed):
   ```
   npm install -g http-server
   ```

4. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - In the project settings, find your web app configuration
   - Add the Firebase configuration to your project by creating a `firebase-config.js` file in the project root with the following content:
     ```javascript
     const firebaseConfig = {
       // Your Firebase configuration object
     };

     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     const database = firebase.database();
     ```

5. Update the `index.html` file to include the Firebase SDK and your configuration:
   ```html
   <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
   <script src="firebase-config.js"></script>
   ```

6. Create a `quiz-data.js` file in the project root to store your quiz questions and URL list:
   ```javascript
   const quizData = {
     quizSets: [
       // Your quiz sets here
     ],
     urlList: [
       // Your list of URLs here
     ]
   };
   ```

7. Update the `index.html` file to include the quiz data:
   ```html
   <script src="quiz-data.js"></script>
   ```

## Running the Application

1. Ensure you're in the project directory:
   ```
   cd path/to/ultimate-interactive-quiz-challenge
   ```

2. Start the local server:
   ```
   http-server
   ```
   python3 -m http.server 8000

3. You should see output similar to this:
   ```
   Starting up http-server, serving ./
   Available on:
     http://127.0.0.1:8080
     http://192.168.1.5:8080
   Hit CTRL-C to stop the server
   ```

4. Open your web browser and navigate to `http://localhost:8080` (or the IP address and port number provided by http-server)

5. You should now see the Ultimate Interactive Quiz Challenge application running in your browser!

6. To stop the server when you're done, press CTRL-C in the terminal where http-server is running.

Troubleshooting:
- If you see a blank page, check the browser's developer console for any error messages.
- Ensure all file paths in your HTML are correct.
- If you're having issues with Firebase, double-check your Firebase configuration and make sure you've enabled the Realtime Database in your Firebase project settings.

## Usage

1. Enter your username and click "Start Quiz"
2. Answer each question within the time limit
3. Your score will be displayed after each set of questions
4. View the leaderboard to see how you rank against other players
5. Share your score on WhatsApp to challenge your friends!

## Contributing

Contributions to the Ultimate Interactive Quiz Challenge are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions, please contact [your-email@example.com](mailto:your-email@example.com).

## Acknowledgements

- [Firebase](https://firebase.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)