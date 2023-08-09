const addUserBtn = document.getElementById('addUserBtn')

const userNameTextField = document.getElementById('userName')

let usersArray = []

let objStr = localStorage.getItem('users')

if (objStr != null) {
    usersArray = JSON.parse(objStr)
}

addUserBtn.addEventListener('click', () => {
    const userName = userNameTextField.value;
    usersArray.push({'name': userName})
    saveInfo(usersArray)
    if (userNameTextField.value === 'delete') {
        localStorage.clear()
    }
    userNameTextField.value = ""

})

function saveInfo(usersArray) {
    // convert json object to string
    let str = JSON.stringify(usersArray)
    // save in localStorage
    localStorage.setItem('users', str)
}

function displayInfo() {
    let statement = '';
    usersArray.forEach((user) => {
        
    })
}

function editInfo() {

}

function deleteInfo() {

}