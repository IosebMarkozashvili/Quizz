var NumQuestionsElem = document.querySelector("#numberofquestions");
var SelectCategoryElem = document.querySelector("#SelectCategory");
var SelectDifficultyElem = document.querySelector("#SelectDifficulty");
var SelectTypeElem = document.querySelector("#SelectType");
var SelectEncodingElem = document.querySelector("#SelectEncoding");



function check(data, correct_answer, swori, araswori,heh){

    var datas = document.getElementById(`${data}`).innerText
    if(datas.toLowerCase() == correct_answer.toLowerCase()){
       document.querySelector(`#${swori}`).style.display = "block";
       document.querySelector(`#${araswori}`).style.display = "none";
       computerScore.value++;
       computerScore.innerHTML = computerScore.value;
       computerScore.disabled = true;
      var Pointer =  document.querySelector("#Pointer");
       Pointer.innerHTML = computerScore.value
     
    }else{
        document.querySelector(`#${swori}`).style.display = "none";
        document.querySelector(`#${araswori}`).style.display = "block";
      
    }
 
   
    //var datas = document.getElementById(${data}).style.opacity = "0";

}

function fun(){
    computerScore.value = 0
    computerScore.innerHTML = computerScore.value;
    var Pointer =  document.querySelector("#Pointer");
       Pointer.innerHTML = computerScore.value
    var NumQuestions = NumQuestionsElem.value;
    var SelectCategory = SelectCategoryElem.value;
    var SelectDifficulty = SelectDifficultyElem.value;
    var SelectType = SelectTypeElem.value;
    document.querySelector("#TitlePoint").style.display= "block"
    document.querySelector("#result").innerHTML = null;

    var link = 
    `https://opentdb.com/api.php?amount=${NumQuestions}&category=${SelectCategory}&difficulty=${SelectDifficulty}&type=${SelectType}`

   
    var request = new XMLHttpRequest();
    request.open("GET", link, false);
    request.send();
    var status = request.status;
    if (status == 200){
        
   
        var jsonData = JSON.parse(request.responseText);
for (var i = 0; i < jsonData.results.length; i++) {
    var test = jsonData.results[i];
    var text = [];
    for (let o = 0; o < test.incorrect_answers.length; o++) {
        text.push(`${test.incorrect_answers[o]}`)
      };
      text.push(`${test.correct_answer}`)
      divtext = ""
      oop = ""
      text.sort()
      text.forEach(element => {
          oop += element
          divtext += 

         ` 
         <button id="I${i}"
          class="btn col-md-12"  style="background-color: #FBAB7E;
          background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
          "
          onclick="check('I${i}','${test.correct_answer}', 'swori${i}', 'araswori${i}' )"
          >${element}</button>`
         
          
      });
     
      document.querySelector("#result").innerHTML += `
    
    
      <div class="col-md-12 text-center" style="border: 10px solid red; margin-bottom:15px"> 
      <h2 class="text-center question"><span>${i +1}.</span>  ${test.question} </p> <h2>
    
      ${divtext}
        

  <h3 style="
  border:none;
  background: green;
  display:none" id="swori${i}">სწორია </h3>
  <h3 style="
  border:none;
  background: red;
  display:none" id="araswori${i}">არასწორია </h3>

       
               
        `

    
}

           }
    
    else if (status == 404)
        document.write("რესურსი არ მოიძებნა")
    else
        document.write(request.statusText)

}


function splitestring(data)
{
    const myArr = data.split(" ");
    var e = '';
    myArr.forEach(element => {
        e += element;
    });
    return e;
}



window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// var NumQuestionsElem = document.querySelector("#numberofquestions");
// var SelectCategoryElem = document.querySelector("#SelectCategory");
// var SelectDifficultyElem = document.querySelector("#SelectDifficulty");
// var SelectTypeElem = document.querySelector("#SelectType");
// var SelectEncodingElem = document.querySelector("#SelectEncoding");



// function check(data, correct_answer, id, swori, araswori,heh){

//     document.getElementById(`${id}`).style.display = 'none'
//     var datas = document.getElementById(`${data}`).value
//     if(datas.toLowerCase() == correct_answer.toLowerCase()){
//        document.querySelector(`#${swori}`).style.display = "block";
//        document.querySelector(`#${araswori}`).style.display = "none";
//        computerScore.value++;
//        computerScore.innerHTML = computerScore.value;
//        computerScore.disabled = true;
//       var Pointer =  document.querySelector("#Pointer");
//        Pointer.innerHTML = computerScore.value
     
//     }else{
//         document.querySelector(`#${swori}`).style.display = "none";
//         document.querySelector(`#${araswori}`).style.display = "block";
      
//     }
 
   
//     var datas = document.getElementById(`${data}`).style.opacity = "0";

// }

// function fun(){
//     computerScore.value = 0
//     computerScore.innerHTML = computerScore.value;
//     var Pointer =  document.querySelector("#Pointer");
//        Pointer.innerHTML = computerScore.value
//     var NumQuestions = NumQuestionsElem.value;
//     var SelectCategory = SelectCategoryElem.value;
//     var SelectDifficulty = SelectDifficultyElem.value;
//     var SelectType = SelectTypeElem.value;
//     document.querySelector("#TitlePoint").style.display= "block"
//     document.querySelector("#result").innerHTML = null;

//     var link = 
//     `https://opentdb.com/api.php?amount=${NumQuestions}&category=${SelectCategory}&difficulty=${SelectDifficulty}&type=${SelectType}`

   
//     var request = new XMLHttpRequest();
//     request.open("GET", link, false);
//     request.send();
//     var status = request.status;
//     if (status == 200){
        
   
//         var jsonData = JSON.parse(request.responseText);
// for (var i = 0; i < jsonData.results.length; i++) {
//     var test = jsonData.results[i];
//     var text = [];
//     for (let o = 0; o < test.incorrect_answers.length; o++) {
//         text.push(`${test.incorrect_answers[o]}`)
//       };
//       text.push(`${test.correct_answer}`)
//       divtext = ""
//       oop = ""
//       text.sort()
//       text.forEach(element => {
//           oop += element
//           divtext += 

//          `  <p class="col-md-12 "  style="font-size: 20px"> 
//          ${element} </p>`
          
//       });
     
//       document.querySelector("#result").innerHTML += `
    
    
//       <div class="col-md-12 text-center" style="border: 10px solid red; margin-bottom:15px"> 
//       <h2 class="text-center question"><span>${i +1}.</span>  ${test.question} </p> <h2>
    
//       ${divtext}
        
//  <div class="container">
//     <div class="row">
//     <input class="input col-md-10"   type="text" id="ID${i}"> 
//           <button id="I${i}"
//           class="btn col-md-1"  style="background:red"
//           onclick="check('ID${i}','${test.correct_answer}','I${i}', 'swori${i}', 'araswori${i}' )"
//           >შედეგი </button>
//       </div>
//      </div>
//   <h3 style="
//   border:none;
//   background: green;
//   display:none" id="swori${i}">სწორია </h3>
//   <h3 style="
//   border:none;
//   background: red;
//   display:none" id="araswori${i}">არასწორია </h3>
      
//   </div> 

       
               
//         `

    
// }

//            }
    
//     else if (status == 404)
//         document.write("რესურსი არ მოიძებნა")
//     else
//         document.write(request.statusText)

// }


// function splitestring(data)
// {
//     const myArr = data.split(" ");
//     var e = '';
//     myArr.forEach(element => {
//         e += element;
//     });
//     return e;
// }



// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



