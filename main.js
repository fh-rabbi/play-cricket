/*
* Author: Fazle Rabbi
* Date: 20 March, 23
*/
const btnShow = document.querySelector(".btn-show");
const btnRefresh = document.querySelector(".btn-refresh");
const number = document.querySelectorAll(".number");
const btnGenerate = document.querySelector(".btn-generate");
const input = document.querySelector("input");
const leftDiv = document.querySelector(".left-div");
const middleDiv = document.querySelector(".middle-div");
const rightDiv = document.querySelector(".right-div");
const container = document.querySelector(".container");
const form = document.querySelector(".form");
const header = document.querySelector(".btn-wraper");

// Display number
btnShow.addEventListener("click", function(){
   const number2 = document.querySelectorAll(".number");
   number2.forEach(el => {
      el.style.background = 'none';
   });
});

// Refresh
btnRefresh.addEventListener("click", function(e){
   leftDiv.innerHTML = '';
   middleDiv.innerHTML = '';
   rightDiv.innerHTML = '';
   document.querySelector('.cricket-image')
   .style.display = 'block';
   form.style.display = 'block';
   document.querySelector('.author-name')
   .style.display = 'block';
   header.style.display = 'none';
});

// Shuffle array
function shuffleArray(array) {
  // Loop through the array from the last element to the second element
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at indexes i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  // Return the shuffled array
  return array;
}

// Generate random number
btnGenerate.addEventListener("click", function(e){
   e.preventDefault();
   // When value empty
      // When value not number
   if(input.value == ''){
      const backup = document.querySelector('.error').innerText;
      document.querySelector('.error')
      .innerHTML = "Oops! Invalid input.Please input a number between (1-10)";
      document.querySelector('.error')
      .style.display = 'block';
      setTimeout(function() {
         document.querySelector('.error')
         .style.display = 'none';
         document.querySelector('.error')
         .innerHTML = backup;
      }, 3000);
      return;
   }
   
   if(input.value == ''){
      document.querySelector('.error')
      .style.display = 'block';
      setTimeout(function() {
         document.querySelector('.error')
         .style.display = 'none';
      }, 3000);
      return;
   }

   // Let's clean !
   form.style.display = 'none';
   document.querySelector('.cricket-image')
   .style.display = 'none';
   document.querySelector('.author-name')
   .style.display = 'none';
   header.style.display = 'flex';
   
   const amount = input.value;
   let arrayOfNumber = [];
   for(let i=0;i<amount;i++){
      arrayOfNumber.push(i+1);
   }
   arrayOfNumber = shuffleArray(arrayOfNumber);
   const arrayOfChar = ['A','B','C','D','E','F','G','H','I','J','K','L'];
   // alert(arrayOfNumber);
   
   for(i=0;i<arrayOfNumber.length;i++){
      const node = document.createElement("p");
      const textnode = document.createTextNode(arrayOfNumber[i]);
      node.classList.add("number");
      node.appendChild(textnode);
      leftDiv.appendChild(node);
      
      const node2 = document.createElement("p");
      const textnode2 = document.createElement('hr');
      textnode2.classList.add('line');
      node2.appendChild(textnode2);
      middleDiv.appendChild(node2);
      
      
      const para = document.createElement("p");
      const textnodeForPara = document.createTextNode(arrayOfChar[i]);
      para.appendChild(textnodeForPara);
      rightDiv.appendChild(para);
      
      // Do empty input box
      input.value = '';
   }
});


/*Prevent Typing Over Max Value*/
input.addEventListener("keypress", function(e) {
  e.preventDefault();
  var input = e.target;
  var value = Number(input.value);
  var key = Number(e.key);
  if (Number.isInteger(key)) {
    value = Number("" + value + key);
    if (value > 10) {
      return false;
    }
    input.value = value;
  }
 });
