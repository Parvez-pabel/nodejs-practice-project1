
fetch('http://localhost:3000/users/6')
.then(res =>res.json())
.then(data => {
  document.getElementById('userName').innerText = data.name +" " + data.id;
})


//post data to the server handling
const btnAddUser = document.getElementById('addUser');
btnAddUser.addEventListener('click', () =>{
  const name = document.getElementById('user').value;
  const user = {name};
  //post 
  fetch('http://localhost:3000/addUser',{
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then((res) => res.json())
    .then((data) => updateUser(user));

})

function updateUser(user) {
  document.getElementById('userName').innerText = user.name;
  
}
