// Add your code here
const url = "http://localhost:3000/users"

let formInfo ={
    name: 'Selam',
    email: 'selam.tadd.degefu@gmail.com'
}

function submitData(){
let postRequest ={
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formInfo)
}
return fetch(url, postRequest)
.then(res => res.json())
.then(data => {
    const div = document.createElement('div')
    div.innerText = data.id
    document.body.append(div)
.catch(error => {
    alert('error has occured')
})
})
}

submitData()

