//Create a functionality that displays and alert the current age of a user after the user inputs the year of birth

//first step: utilize an event listener that will be called after the button have been clicked and runs a fucntion

//second step: create a variable that represents the input of the current year

//third step: use the javascript method to get the current date and current year. 

//fourth step:create another variable that will subtract the current year from the birth year

//last step: use js to update the innerhtml of the output to reflect the result of the previous step

document.querySelector('button').addEventListener('click', currentAge)

function currentAge () {
    yearOfBirth = document.getElementById('year').value

    const now = new Date()
    let result = now.getFullYear() - yearOfBirth;

    document.getElementById('output').innerHTML = result
    
}