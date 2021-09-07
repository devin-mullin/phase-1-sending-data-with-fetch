// Add your code here
let userInfo = {
    name: "Steve",
    email: "steve@steve.com",
}

let userConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userInfo)
}

const submitData= function(name, email){
    fetch("http://localhost:3000/users", userConfig)
    .then((response) => {
        return response.json();
    })
    .then(data => appendDom(data))
    .catch((error) => {
        alert('Unauthorized Access')
        console.log(error.message)
    })
}

const appendDom = data => {
    const add = document.body.innerHTML = data.id
}

submitData()