//Generate Prefix//
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The Great'
    } else {
        return 'Master'
    }
}
//generate first name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLetter === 'b') {
        return 'Doctor'
    } else if (firstLetter === 'c') {
        return 'Pluto'
    } else if (firstLetter === 'd') {
        return 'Elon'
    } else if (firstLetter === 'e') {
        return 'Tracy'
    } else {
        return 'George'
    }

}

//generate middle name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}ridge` //Ex: Blueridge
    } else if (roadType === 'street') {
        return `${favoriteColor}son` //Ex: blueson
    } else {
        return `${favoriteColor}stone` //Ex: bluestone
    }
}

//generate Last Name 
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1);

    switch (lastLetter) {
        case 'a':
            return 'Shadow';
        case 'i':
            return 'Monkey';
        case 'o':
            return 'Saturn';
        case 'b':
            return 'Donkey Kong';
        case 'c':
            return 'Slavik';
        case 'd':
            return 'Drogen';
        case 'n':
            return 'Kalkporko';
        case 'e':
            return 'Teperdede';
        case 'r':
            return 'Donligo';
        default:
            return 'Klompo';
    }
}


//generate Suffix 
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan.`
}

//Master Name building function 
function genFullName() {
    //Get the Users Inputs from HTML Elements
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

    //Run Name Generating Functions & store them in new variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)


    //Capitalize Name Variables when needed
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFirstName = capitalize(newFirstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedLastName = capitalize(newLastName)


    //Combine all of the Name variables in a new name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix} `

    //Display the new name
    document.getElementById('result').textContent = fullName
}

//Capitilization Function
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
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
