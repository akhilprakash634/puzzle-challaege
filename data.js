const quizData = {
  quizSets: [
    [
      {
        question: "Which programming language is known for its use in data science and machine learning?",
        options: ["Python", "Java", "C++"],
        answer: "Python",
      },
      {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Wellington", "Christchurch"],
        answer: "Wellington",
      },
      {
        question: "Who painted 'The Persistence of Memory' featuring melting clocks?",
        options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh"],
        answer: "Salvador Dalí",
      },
      {
        question: "What is the largest species of penguin?",
        options: ["Emperor Penguin", "King Penguin", "Gentoo Penguin"],
        answer: "Emperor Penguin",
      },
      {
        question: "Which element has the atomic number 79?",
        options: ["Gold", "Silver", "Platinum"],
        answer: "Gold",
      },
    ],
    [
      {
        question: "What is the name of the longest river in South America?",
        options: ["Amazon", "Orinoco", "Paraná"],
        answer: "Amazon",
      },
      {
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the speed of sound in air at sea level?",
        options: ["343 m/s", "299,792,458 m/s", "1,000 m/s"],
        answer: "343 m/s",
      },
      {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Jordan", "Egypt", "Lebanon"],
        answer: "Jordan",
      },
      {
        question: "What is the largest organ inside the human body?",
        options: ["Liver", "Brain", "Lungs"],
        answer: "Liver",
      },
    ],
    [
      {
        question: "Who is credited with inventing the World Wide Web?",
        options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates"],
        answer: "Tim Berners-Lee",
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Portuguese", "Spanish", "French"],
        answer: "Portuguese",
      },
      {
        question: "Which planet in our solar system rotates clockwise?",
        options: ["Venus", "Mars", "Jupiter"],
        answer: "Venus",
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Si", "Au"],
        answer: "Ag",
      },
      {
        question: "Who composed the opera 'The Magic Flute'?",
        options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach"],
        answer: "Wolfgang Amadeus Mozart",
      },
    ],
    [
      {
        question: "What is the largest type of big cat in the world?",
        options: ["Siberian Tiger", "African Lion", "Jaguar"],
        answer: "Siberian Tiger",
      },
      {
        question: "Which country is home to Machu Picchu?",
        options: ["Peru", "Mexico", "Chile"],
        answer: "Peru",
      },
      {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Fermented soybean paste", "Seaweed", "Tofu"],
        answer: "Fermented soybean paste",
      },
      {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
        answer: "George Orwell",
      },
      {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Molecule", "Electron"],
        answer: "Atom",
      },
    ],
    [
      {
        question: "Which mountain range stretches across much of northern India?",
        options: ["Himalayas", "Andes", "Alps"],
        answer: "Himalayas",
      },
      {
        question: "Who is known as the 'Father of Computer Science'?",
        options: ["Alan Turing", "Charles Babbage", "Ada Lovelace"],
        answer: "Alan Turing",
      },
      {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver"],
        answer: "Ottawa",
      },
      {
        question: "Which planet is known as the 'Ice Giant'?",
        options: ["Uranus", "Neptune", "Saturn"],
        answer: "Uranus",
      },
      {
        question: "What is the largest coral reef system in the world?",
        options: ["Great Barrier Reef", "Mesoamerican Barrier Reef", "New Caledonia Barrier Reef"],
        answer: "Great Barrier Reef",
      },
    ],
    [
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Antarctic"],
        answer: "Antarctic",
      },
      {
        question: "Who composed the 'Moonlight Sonata'?",
        options: ["Mozart", "Beethoven", "Bach"],
        answer: "Beethoven",
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl"],
        answer: "H2O",
      },
      {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Neptune", "Uranus"],
        answer: "Earth",
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.D. Salinger"],
        answer: "Harper Lee",
      },
    ],
    [
      {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Whale Shark", "Hammerhead Shark"],
        answer: "Whale Shark",
      },
      {
        question: "Which country is home to the Taj Mahal?",
        options: ["India", "Egypt", "Turkey"],
        answer: "India",
      },
      {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Incheon"],
        answer: "Seoul",
      },
      {
        question: "Who painted 'Starry Night'?",
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso"],
        answer: "Vincent van Gogh",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter",
      },
    ],
    [
      {
        question: "What is the smallest ocean in the world?",
        options: ["Arctic Ocean", "Indian Ocean", "Southern Ocean"],
        answer: "Arctic Ocean",
      },
      {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur"],
        answer: "Alexander Fleming",
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra"],
        answer: "Canberra",
      },
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Mars"],
        answer: "Saturn",
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles"],
        answer: "Homer",
      },
    ],
    [
      {
        question: "What is the largest land animal?",
        options: ["Elephant", "Giraffe", "Hippopotamus"],
        answer: "Elephant",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand"],
        answer: "Japan",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River"],
        answer: "Nile River",
      },
      {
        question: "What is the freezing point of water?",
        options: ["0°C", "32°C", "100°C"],
        answer: "0°C",
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
        answer: "Michelangelo",
      },
    ],
    [
      {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga"],
        answer: "Mount Everest",
      },
      {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen",
      },
      {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Africa", "Asia", "Australia"],
        answer: "Africa",
      },
      {
        question: "What is the capital of Russia?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk"],
        answer: "Moscow",
      },
    ],
    [
      {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French"],
        answer: "Portuguese",
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino"],
        answer: "Vatican City",
      },
      {
        question: "Who is the author of 'Harry Potter'?",
        options: ["J.K. Rowling", "Stephen King", "George R.R. Martin"],
        answer: "J.K. Rowling",
      },
      {
        question: "Which gas is known as laughing gas?",
        options: ["Oxygen", "Nitrous Oxide", "Carbon Dioxide"],
        answer: "Nitrous Oxide",
      },
      {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice"],
        answer: "Rome",
      },
    ],
    [
      {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Elon Musk"],
        answer: "Bill Gates",
      },
      {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza"],
        answer: "Cairo",
      },
      {
        question: "Which planet is closest to the sun?",
        options: ["Mercury", "Venus", "Earth"],
        answer: "Mercury",
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson"],
        answer: "Jane Austen",
      },
      {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Lettuce"],
        answer: "Avocado",
      },
    ],
    [
      {
        question: "Which element has the chemical symbol 'C'?",
        options: ["Carbon", "Copper", "Chlorine"],
        answer: "Carbon",
      },
      {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Madrid", "Seville"],
        answer: "Madrid",
      },
      {
        question: "Who is the author of 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"],
        answer: "J.D. Salinger",
      },
      {
        question: "Which planet has rings around it?",
        options: ["Saturn", "Mars", "Venus"],
        answer: "Saturn",
      },
      {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Femur", "Humerus"],
        answer: "Stapes",
      },
    ],
    [
      {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo"],
        answer: "Greenland",
      },
      {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin"],
        answer: "Thomas Edison",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yen", "Won", "Yuan"],
        answer: "Yen",
      },
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl"],
        answer: "NaCl",
      },
      {
        question:
          "Who is the main character in 'The Adventures of Sherlock Holmes'?",
        options: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple"],
        answer: "Sherlock Holmes",
      },
    ],
    [
      {
        question: "What is the largest freshwater lake by volume?",
        options: ["Lake Baikal", "Lake Superior", "Lake Victoria"],
        answer: "Lake Baikal",
      },
      {
        question: "Who is the first man to walk on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
        answer: "Neil Armstrong",
      },
      {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir"],
        answer: "Ankara",
      },
      {
        question: "Which element is commonly used in batteries?",
        options: ["Lithium", "Zinc", "Copper"],
        answer: "Lithium",
      },
      {
        question: "Who composed 'The Four Seasons'?",
        options: ["Vivaldi", "Bach", "Beethoven"],
        answer: "Vivaldi",
      },
    ],
    [
      {
        question: "What is the smallest bird in the world?",
        options: ["Hummingbird", "Sparrow", "Canary"],
        answer: "Hummingbird",
      },
      {
        question: "Who painted 'The Last Supper'?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Frankfurt"],
        answer: "Berlin",
      },
      {
        question: "Which planet is known as the 'Evening Star'?",
        options: ["Venus", "Mars", "Mercury"],
        answer: "Venus",
      },
      {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "In"],
        answer: "Fe",
      },
    ],
    [
      {
        question: "What is the largest land animal?",
        options: ["Elephant", "Rhinoceros", "Hippopotamus"],
        answer: "Elephant",
      },
      {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze"],
        answer: "Nile",
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide"],
        answer: "Nitrogen",
      },
      {
        question: "What is the smallest continent by land area?",
        options: ["Australia", "Antarctica", "Europe"],
        answer: "Australia",
      },
    ],
    [
      {
        question: "What is the largest island in the world?",
        options: ["Greenland", "Madagascar", "Borneo"],
        answer: "Greenland",
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë"],
        answer: "Jane Austen",
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["100°C", "90°C", "80°C"],
        answer: "100°C",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie"],
        answer: "Alexander Fleming",
      },
    ],
    [
      {
        question: "What is the chemical formula for carbon dioxide?",
        options: ["CO2", "CO", "O2"],
        answer: "CO2",
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles"],
        answer: "Homer",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Gold", "Silver"],
        answer: "Diamond",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus"],
        answer: "Mercury",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "South Korea"],
        answer: "Japan",
      },
    ],
    [
      {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Naples"],
        answer: "Rome",
      },
      {
        question: "Who discovered America?",
        options: ["Christopher Columbus", "Ferdinand Magellan", "James Cook"],
        answer: "Christopher Columbus",
      },
      {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Lime"],
        answer: "Avocado",
      },
      {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Femur", "Tibia"],
        answer: "Stapes",
      },
      {
        question: "Who painted 'The Starry Night'?",
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso"],
        answer: "Vincent van Gogh",
      },
    ],
    [
      {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga"],
        answer: "Mount Everest",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth"],
        answer: "Mercury",
      },
      {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann"],
        answer: "Charles Babbage",
      },
      {
        question: "What is the largest mammal?",
        options: ["Blue Whale", "Elephant", "Giraffe"],
        answer: "Blue Whale",
      },
      {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Valencia"],
        answer: "Madrid",
      },
    ],
    [
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus"],
        answer: "Jupiter",
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
        answer: "F. Scott Fitzgerald",
      },
      {
        question: "What is the primary gas found in the sun?",
        options: ["Hydrogen", "Oxygen", "Carbon Dioxide"],
        answer: "Hydrogen",
      },
      {
        question: "What is the smallest prime number?",
        options: ["2", "3", "5"],
        answer: "2",
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael"],
        answer: "Michelangelo",
      },
    ],
    [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb"],
        answer: "Au",
      },
      {
        question: "Who was the first person to step on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
        answer: "Neil Armstrong",
      },
      {
        question: "What is the capital of Russia?",
        options: ["Moscow", "Saint Petersburg", "Kazan"],
        answer: "Moscow",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Heart"],
        answer: "Skin",
      },
      {
        question: "Who wrote 'Moby Dick'?",
        options: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne"],
        answer: "Herman Melville",
      },
    ],
    [
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Oxide"],
        answer: "Oxygen",
      },
      {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"],
        answer: "Alexander Graham Bell",
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arctic", "Antarctic"],
        answer: "Antarctic",
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "J.K. Rowling"],
        answer: "Harper Lee",
      },
    ],
    [
      {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza"],
        answer: "Cairo",
      },
      {
        question: "Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the main component of the Sun?",
        options: ["Hydrogen", "Helium", "Oxygen"],
        answer: "Hydrogen",
      },
      {
        question: "Which country is known for the Great Wall?",
        options: ["China", "Japan", "India"],
        answer: "China",
      },
      {
        question: "What is the primary ingredient in chocolate?",
        options: ["Cocoa", "Milk", "Sugar"],
        answer: "Cocoa",
      },
    ],
  ],
  urlList: [
    "https://m.indiamart.com/proddetail/2850317401733.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=218",
    "https://m.indiamart.com/proddetail/2850434214348.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=219",
    "https://m.indiamart.com/proddetail/2848958509797.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=220",
    "https://m.indiamart.com/impcat/bearing-cages.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=217",
    "https://m.indiamart.com/proddetail/20816995797.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=222",
    "https://m.indiamart.com/proddetail/2853974016912.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=223",
    "https://m.indiamart.com/proddetail/2853612358391.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=224",
    "https://m.indiamart.com/impcat/e-rickshaw-loader.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=221",
    "https://m.indiamart.com/proddetail/1192924755.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=226",
    "https://m.indiamart.com/proddetail/21831889433.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=227",
    "https://m.indiamart.com/proddetail/2851767715088.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=228",
    "https://m.indiamart.com/impcat/jumbo-bags.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=225",
    "https://m.indiamart.com/proddetail/23316641462.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=230",
    "https://m.indiamart.com/proddetail/2852886130455.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=231",
    "https://m.indiamart.com/proddetail/2850650906033.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=232",
    "https://m.indiamart.com/impcat/battery-holders.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=229",
    "https://m.indiamart.com/proddetail/22407770733.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=234",
    "https://m.indiamart.com/proddetail/2853452813630.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=235",
    "https://m.indiamart.com/proddetail/22503739462.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=236",
    "https://m.indiamart.com/impcat/acrylic-dry-mop.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=233",
    "https://m.indiamart.com/proddetail/22586338012.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=238",
    "https://m.indiamart.com/proddetail/2850109062755.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=239",
    "https://m.indiamart.com/proddetail/26488791855.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=240",
    "https://m.indiamart.com/impcat/ring-blower.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=237",
    "https://m.indiamart.com/proddetail/26522161097.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=242",
    "https://m.indiamart.com/proddetail/2852647071662.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=243",
    "https://m.indiamart.com/proddetail/23166016991.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=244",
    "https://m.indiamart.com/impcat/vacuum-cleaning-machine.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=241",
    "https://m.indiamart.com/proddetail/24218826512.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=246",
    "https://m.indiamart.com/proddetail/24798437462.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=247",
    "https://m.indiamart.com/proddetail/2851356562691.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=248",
    "https://m.indiamart.com/impcat/cupping-set.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=245",
    "https://m.indiamart.com/proddetail/14059913412.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=250",
    "https://m.indiamart.com/proddetail/2854576520155.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=251",
    "https://m.indiamart.com/proddetail/24775933855.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=252",
    "https://m.indiamart.com/impcat/leather-keychain.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=249",
    "https://m.indiamart.com/proddetail/25694207412.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=254",
    "https://m.indiamart.com/proddetail/23579517530.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=255",
    "https://m.indiamart.com/proddetail/2850565729255.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=256",
    "https://m.indiamart.com/impcat/card-pen-drive.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=253",
    "https://m.indiamart.com/proddetail/2850332096573.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=258",
    "https://m.indiamart.com/proddetail/23022510073.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=259",
    "https://m.indiamart.com/proddetail/25753551791.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=260",
    "https://m.indiamart.com/impcat/ac-dc-adapter.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=257",
    "https://m.indiamart.com/proddetail/2849486862748.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=266",
    "https://m.indiamart.com/proddetail/25958066648.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=267",
    "https://m.indiamart.com/proddetail/26505263073.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=268",
    "https://m.indiamart.com/impcat/metal-ball-pen.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=265",
    "https://m.indiamart.com/proddetail/26170590288.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=270",
    "https://m.indiamart.com/proddetail/2849513058348.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=271",
    "https://m.indiamart.com/proddetail/2851064743355.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=272",
    "https://m.indiamart.com/impcat/synthetic-enamel-paint.html?utm_source=mr_data_pirate&utm_medium=affiliate&utm_campaign=1024&utm_content=269"
  ],
};
