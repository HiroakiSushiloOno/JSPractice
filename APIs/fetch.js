const fetch = (url) => {
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  }
fetch("test.txt");
