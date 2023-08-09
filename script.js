const addUserBtn = document.getElementById('addUserBtn')

const btnText = addUserBtn.innerText

const userNameTextField = document.getElementById('userName')

let recordDisplay = document.getElementById('records')

let usersArray = []
let edit_id = null

let objStr = localStorage.getItem('users')

if (objStr != null) {
    usersArray = JSON.parse(objStr)
}

displayInfo();

addUserBtn.addEventListener('click', () => {
    const userName = userNameTextField.value;
    if (edit_id != null) {
        // edit
        usersArray.splice(edit_id,1,{'name': userName})
        edit_id = null
    } else {
        // insert
        usersArray.push({'name': userName})
    }
    saveInfo(usersArray)
    if (userNameTextField.value === 'delete') {
        localStorage.clear()
    }
    userNameTextField.value = ""
    addUserBtn.innerText = btnText

})

function saveInfo(usersArray) {
    // convert json object to string
    let str = JSON.stringify(usersArray)
    // save in localStorage
    localStorage.setItem('users', str)
    displayInfo()
}

function displayInfo() {
    let statement = '';
    usersArray.forEach((user, i) => {
        statement += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td>
            <i class="fa fa-edit" onclick='editInfo(${i})'style="font-size:30px"></i>
            <i class="fa fa-trash-o" onclick='deleteInfo(${i})' style="font-size:30px; color:red"></i>
        </td>
    </tr>`
    })
    recordDisplay.innerHTML = statement
}

function editInfo(id) {
    edit_id = id;
    userNameTextField.value = usersArray[id].name
    addUserBtn.innerText ='Save Changes';
}

function deleteInfo(id) {
    usersArray.splice(id,1)
    saveInfo(usersArray)
    displayInfo()
}
