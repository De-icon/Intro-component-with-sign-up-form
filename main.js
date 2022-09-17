
const firstName = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submit = document.getElementById('submit')
const form = document.querySelector('form')

form.addEventListener('focus', (e) => {
        e.preventDefault()
})

function pass() {
       const fistNameValue= firstName.value
       const lastNameVlaue= lastName.value
       const emailValue= email.value
       const passwordValue= password.value
        // check for first name
        if (fistNameValue === "") {
                invalid(firstName, "First name can not be empty")
        }
        // check for last name 
        if (lastNameVlaue === "") {
                invalid(lastName, "Last name can not be empty")
        }
        // check for email
        if (emailValue !== validEmail(email)) {
                invalid(email, "invalid email address")
        }
        // check for password
        if (passwordValue === "") {
                invalid(password, "Password can not be empty")
        } else if (passwordValue => 8) {
                invalid(password, "password most be above 8")
        } else {
                 true
        }

        
}
function validEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
function invalid(input, message){
        const list = input.parentElement;
        const p = list.querySelector('p')

        p.innerText = message
        list.className = "erro"
}