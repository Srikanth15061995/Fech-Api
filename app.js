//  button1
document.getElementById('button1').addEventListener('click', getText);


function getText() {
  fetch('test.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

       
        document.getElementById('output').innerHTML = data;
      })
      .catch(err=> {
        console.log(err);

        
        document.getElementById('output').innerHTML = err;
      });
}

//  button2
document.getElementById('button2').addEventListener('click', getJson);


function getJson() {
  fetch('posts.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);

   
        let output = '';
        data.forEach(function(post) {
          output +=`<li>${post.title}: ${post.body}</li>`
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

        
        document.getElementById('output').innerHTML = err;
      });
}

//  button3
document.getElementById('button3').addEventListener('click', getDataFromExternalAPI);


function getDataFromExternalAPI() {
  fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);

       
        let output = '';
        data.forEach(function(user) {
          output +=`<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

   
        document.getElementById('output').innerHTML = err;
      });

}