// Generate Prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'Supreme Overlord';
    } else if (firstName.length < 5) {
        return 'The Great';
    } else if (firstName.length === 3 ) {
        return 'Bob the Eternal';
    } else {
        return 'Master';
    }
}

// Generate First Name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();

    if (firstLetter === 'a') {
        return 'Jeff the Wizard';
    } else if (firstLetter === 'b') {
        return 'Doctor Cabbage';
    } else if (firstLetter === 'c') {
        return 'Pluto the Bold';
    } else if (firstLetter === 'd' || firstLetter === 'e') {
        return 'Lord Fluffykins';
    } else if (firstLetter === 'f' && firstName.includes('x')) {
        return 'Sir Screechy';
    } else if (['g', 'h', 'i'].includes(firstLetter)) {
        return 'Captain MooMoo';
    } else {
        return 'George the Unlikely';
    }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road' && favoriteColor.toLowerCase() === 'blue') {
        return 'Bluedragon';
    } else if (roadType === 'street' && favoriteColor.toLowerCase().includes('red')) {
        return 'Firestorm';
    } else if (roadType === 'lane' || roadType === 'avenue') {
        return `${favoriteColor}pickle`; // Example: Greenpickle
    } else if (roadType === 'boulevard') {
        return `${favoriteColor}pants`; // Example: Pinkpants
    } else {
        return `${favoriteColor}potato`; // Default funny middle name
    }
}

// Generate Last Name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();

    switch (lastLetter) {
        case 'a':
            return 'The Alligator';
        case 'i':
            return 'Bananas';
        case 'o':
            return 'Saturnbutt';
        case 'b':
            return 'Donkey Kongface';
        case 'c':
            return 'Slavikton';
        case 'd':
            return 'McDerp';
        case 'n':
            return 'Picklenator';
        case 'e':
            return 'Teabags';
        case 'r':
            return 'Fartsniffer';
        case 'y':
            return 'Chickenpants';
        default:
            return 'Wiggles';
    }
}

// Generate Suffix
function genSuffix(favoriteAnimal) {
    if (favoriteAnimal.toLowerCase() === 'cat' || favoriteAnimal.toLowerCase() === 'dog') {
        return `of the Royal ${favoriteAnimal} Court`;
    } else if (favoriteAnimal.toLowerCase().includes('dragon')) {
        return `from the ${favoriteAnimal} Horde`;
    } else if (favoriteAnimal.length > 5) {
        return `of ${favoriteAnimal}-dom`;
    } else {
        return `of the ${favoriteAnimal} Clan`;
    }
}

// Master Name Building Function
function genFullName() {
    // Get the user's inputs from HTML elements
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const roadType = document.getElementById('roadType').value;
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    // Run name generating functions & store them in new variables
    const prefix = genPrefix(firstName);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(roadType, favoriteColor);
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    // Combine all of the name variables into a new name
    const fullName = `${prefix} ${newFirstName} ${middleName} ${newLastName} ${suffix}`;

    // Capitalize every first letter of the final name
    const formattedFullName = capitalizeEveryWord(fullName);

    // Display the new name
    document.getElementById('result').textContent = formattedFullName;
}

// Function to capitalize the first letter of every word
function capitalizeEveryWord(input) {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Update progress bar dynamically based on form input
document.getElementById('fantasyForm').addEventListener('input', function () {
    const fields = document.querySelectorAll('input, select');
    let filledCount = 0;

    // Count filled fields
    fields.forEach(field => {
        if (field.value.trim() !== '') {
            filledCount++;
        }
    });

    // Calculate progress percentage
    const progress = (filledCount / fields.length) * 100;

    // Update the progress bar width and text
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${Math.round(progress)}%`;

    // Update aria-valuenow for accessibility
    document.querySelector('.progress').setAttribute('aria-valuenow', progress);
});
