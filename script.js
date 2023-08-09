const addUserBtn = document.getElementById('addUserBtn')

const userNameTextField = document.getElementById('userName')

let usersArray = []

localStorage.getItem('users')



addUserBtn.addEventListener('click', () => {
    const userName = userNameTextField.value;
    usersArray.push({'name': userName})
    saveInfo(usersArray)
})

function saveInfo(usersArray) {
    // convert json object to string
    let str = JSON.stringify(usersArray)
    // save in localStorage
    localStorage.setItem('users', str)
}

function displayInfo() {

}

function editInfo() {

}

function deleteInfo() {

}