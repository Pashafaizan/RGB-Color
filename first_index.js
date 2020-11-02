function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var first = "rgb(" + x + ", " + y + ", " + z + ")";
    var second ="rgb(" + y + ", " + z + ", " + x + ")";
    var third = "rgb(" + z + ", " + x + ", " + y + ")";
 return [first,second,third];
  
   // document.body.style.background = bgColor;
    }

colors=random_bg_color();
var first_color = colors[0];
var second_color = colors[1];
var third_color = colors[2]
console.log(first_color);

let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let result = document.querySelector('.result');
let navigation = document.querySelector('.navigation_bar');
let heading = document.querySelector('.heading');
let heading1 = document.querySelector('.heading1');
 let bg = document.querySelector('.body_background');

 //   temprory vlaues.................
// let ffirst = frist;
// let ssecond = second;
// let tthird = third;


console.log(first);
first.style.backgroundColor = first_color;
second.style.backgroundColor = second_color;
third.style.backgroundColor = third_color;

let randomOfThree = Math.floor(Math.random() * 2);
document.querySelector('.matching_color').innerHTML = colors[randomOfThree];
let storeRandomOfThree = colors[randomOfThree];

first.addEventListener("click",function(){
  if(first_color == storeRandomOfThree){
    first.style.backgroundColor=storeRandomOfThree;
    second.style.backgroundColor=storeRandomOfThree;
    third.style.backgroundColor=storeRandomOfThree;
  //  document.querySelector('.matching_color').style.backgroundColor = storeRandomOfThree;
  //  navigation.style.backgroundColor = storeRandomOfThree;
    bg.style.backgroundColor = storeRandomOfThree;
    result.innerHTML= "Hurrah!!!  You win";
    window.stop();
  }
  else
  {
    result.innerHTML= "Try Again";
       
    first.remove();
    console.log("failed");
  }
});
  third.addEventListener("click",function(){
    if(third_color == storeRandomOfThree){
      first.style.backgroundColor=storeRandomOfThree;
      second.style.backgroundColor=storeRandomOfThree;
      third.style.backgroundColor=storeRandomOfThree;
    //  document.querySelector('.matching_color').style.backgroundColor = storeRandomOfThree;
    //  navigation.style.backgroundColor = storeRandomOfThree;
      bg.style.backgroundColor = storeRandomOfThree;
      result.innerHTML= "Hurrah!!!  You win";
      window.stop();
    }
    else
    {
      result.innerHTML= "Try Again";
      third.remove();
      console.log("failed");
    }
});
second.addEventListener("click",function(){
  if(second_color == storeRandomOfThree){
    first.style.backgroundColor=storeRandomOfThree;
    second.style.backgroundColor=storeRandomOfThree;
    third.style.backgroundColor=storeRandomOfThree;
   // document.querySelector('.matching_color').style.backgroundColor = storeRandomOfThree;
   // navigation.style.backgroundColor = storeRandomOfThree;
    bg.style.backgroundColor = storeRandomOfThree;
    result.innerHTML= "Hurrah!!!  You win";
    window.stop();
  }
  else
  {    result.innerHTML= "Try Again";
  second.remove();
    console.log("failed");
  }
});


//  for new color 

let newColor = document.querySelector(".new_color");
newColor.addEventListener("click",function(){
  location.reload();
  
});