const jokeButton = document.getElementById("generate-joke");
const nextButton = document.getElementById("next-joke");
const categorySelect = document.getElementById("category");
const jokeText = document.getElementById("joke");
const starIcon = document.getElementById("star");
const savedJokesSection = document.getElementById("saved-jokes-section");

let savedJokes = [];
let currentJoke = "";

// Predefined jokes for each department
const jokesByDepartment = {
    Civil: [
        "Why did the civil engineer break up with their partner? Because they were always building walls!",
        "What's a civil engineer's favorite type of music? Rock and roll!",
        "Why don't civil engineers trust gravity? Because it's always pulling them down!"
    ],
    Mechanical: [
        "Why did the mechanical engineer bring a ladder to work? Because they were going to the next level!",
        "What did the mechanical engineer say to the broken machine? 'You need a little more torque!'",
        "Why did the gear refuse to talk? It was feeling a little too 'revoluted'!"
    ],
    Electrical: [
        "Why did the electrical engineer fail at the dating game? Because they couldn't make a good connection!",
        "What do you call an electrical engineer who can't solve problems? A short circuit!",
        "Why did the electrical engineer get shocked? Because they were in the wrong current!"
    ],
    Computer: [
        "Why do computer scientists prefer dark mode? Because light attracts bugs!",
        "Why did the computer go to therapy? It had too many bugs to fix!",
        "Why was the computer cold? Because it left its Windows open!"
    ],
    Chemical: [
        "Why do chemists like nitrates so much? Because they’re cheaper than day rates!",
        "Why did the chemical engineer break up with the chemist? They had too many reaction problems!",
        "What did the chemical engineer say at the party? 'Let's make some reactions!'"
    ],
    Aerospace: [
        "Why did the aerospace engineer fail their test? Because they didn’t know how to land the answers!",
        "How do aerospace engineers organize their workspace? They keep everything in 'altitude'!",
        "Why did the aerospace engineer get grounded? Because their ideas were flying too high!"
    ]
};

jokeButton.addEventListener("click", generateJoke);
nextButton.addEventListener("click", generateJoke);
starIcon.addEventListener("click", saveOrUnsaveJoke);

// Function to generate a joke based on selected department
function generateJoke() {
    const selectedDepartment = categorySelect.value; // Get selected department
    const jokes = jokesByDepartment[selectedDepartment];

    if (jokes) {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeText.textContent = randomJoke;
        currentJoke = randomJoke;
        starIcon.classList.remove('saved'); // Reset star icon when a new joke is shown
    } else {
        jokeText.textContent = "Sorry, no jokes available for this department. Please try another!";
    }
}

// Function to save or unsave jokes
function saveOrUnsaveJoke() {
    if (starIcon.classList.contains('saved')) {
        // Unsave joke
        savedJokes = savedJokes.filter(joke => joke !== currentJoke);
        starIcon.classList.remove('saved');
        updateSavedJokesSection();
    } else {
        // Save joke
        savedJokes.push(currentJoke);
        starIcon.classList.add('saved');
        updateSavedJokesSection();
    }
}

// Function to update saved jokes section
function updateSavedJokesSection() {
    savedJokesSection.innerHTML = ''; // Clear the section
    savedJokes.forEach(joke => {
        const jokeElement = document.createElement('div');
        jokeElement.classList.add('saved-joke');
        jokeElement.textContent = joke;
        savedJokesSection.appendChild(jokeElement);
    });
}
