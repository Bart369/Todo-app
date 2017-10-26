button = document.querySelector('button');
button.addEventListener('click', function(){
  fetch('/todo')
      .then(function(response) {
        console.log('http response' ,response);  // initial response from server
        return response.json(); // returns json from response after response has been read
      })
      .then(function(jsonData) { // chaining promise
        onSuccess(jsonData);
      })
      .catch(function(err){
        console.log('Errorzzz')
      })
})
