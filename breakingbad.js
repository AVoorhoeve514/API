let timeoutId;
let count = 0;

function change_message() {
  clearTimeout(timeoutId);

  fetch('https://api.breakingbadquotes.xyz/v1/quotes', {
    headers: {
      'Accept': 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8',
    },
    mode: 'cors'
  })
    .then(function(response) {
      // handle success
      return response.json();
    })
    .then(function(data) {
      console.log(data[0].quote);
      let popup = document.getElementById('popup');
      popup.innerHTML = data[0].quote;
      popup.classList.add('show');

      count++;
      timeoutId = setTimeout(function() {
        popup.classList.remove('show');
        if (count === 1) {
          console.log('hide');
        } else {
          console.log('hide (' + count + ' times)');
        }
      }, 3000);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
