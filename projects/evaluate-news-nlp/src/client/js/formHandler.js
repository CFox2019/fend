import { checkForName } from './nameChecker'

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    const response = await fetch('http://localhost:8080/test', {
        mode: 'cors',
        credentials: 'same-origin'
    });
    const json = await response.json();
    document.getElementById('results').innerHTML = json.message;
}

export { handleSubmit }
