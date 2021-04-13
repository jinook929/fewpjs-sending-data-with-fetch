// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(res => res.json())
  .then(obj=> {
    console.log(obj);
    const body = document.querySelector("body");
    body.textContent = obj.id;
  })
  .catch(error => {
    console.log(error.message);
    const body = document.querySelector("body");
    body.textContent = error.message;
  });
}

submitData("John", "john@email.com");