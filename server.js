var degree = 0;
document.addEventListener('DOMContentLoaded', function(){
  var lbutton = document.getElementById('leftButton');
  var rbutton = document.getElementById('rightButton');
  var resetButton = document.getElementById('reset');
    lbutton.addEventListener('click', function(){
      degree += 90;
      chrome.tabs.executeScript(null,
        {code:"document.getElementsByClassName('TPpRNe')[1].style.transform = 'rotate("+degree+"deg)';"});
    });
  rbutton.addEventListener('click', function(){
      degree -= 90;
      chrome.tabs.executeScript(null,
        {code:"document.getElementsByClassName('TPpRNe')[1].style.transform = 'rotate("+degree+"deg)';"});
  });
  resetButton.addEventListener('click', function(){
    chrome.tabs.executeScript(null,
      {code:"document.getElementsByClassName('TPpRNe')[1].style.transform = 'rotate(0deg)';"});
  });
});




