import './styles.css';

let sentenceInput = document.querySelector('.sentence');
const form =  document.querySelector('#formId');
let output =  document.querySelector('.output');

form.addEventListener('submit',submitForm);
 /*Read */
function submitForm(e){
  e.preventDefault();
  let sentence =  sentenceInput.value.trim();
  if(/[A-Za-z]/.test(sentence )){
    setSuccess(sentenceInput, 'Success value');
    output.innerHTML = parsingFunction(sentence);
  }else{
    setError(sentenceInput, 'Please enter proper value')
  }
}

/*Set error message on the browser by giving class name that class will change color in CSS*/
function setError(input, errorMessage){
  let message = input.nextElementSibling;
  message.classList.add('error');
  message.innerHTML = errorMessage;
}
/*Set success message on the browser by giving class name that class will change color in CSS*/
function setSuccess(input, successMessage){
  let message = input.nextElementSibling;
  message.classList.add('success');
  message.innerHTML = successMessage;
}

/*Parse sentence into special pattern*/
function parsingFunction(input) {
    /*Remove all symbols or leave only letters from a-z or A-Z*/
    let stringWithoutSymbols = input.replace(/[^a-zA-Z ]/g, "");
    /*Split each word of sentence as a element of array*/
    let arr = stringWithoutSymbols.split(" ");

    let newStr =   arr.reduce( (acc, word) => {
        let sizeWord = word.length - 1;
        let newStr = word.substring(0,1)+ `${countUniqueLetters(word.substring(1,sizeWord))}` + word.substring(sizeWord)
        acc.push(newStr)
        return acc;
      },[])
      return newStr.join(' ');
    }

  /*Count non-consecitve letters. For example: Smooth => Smoth or Smoooth => Smoth */
 function countUniqueLetters(str){
   let arr = str.split('');
   //Smoooth
   let index = 0;
   while(index < arr.length){
     if(arr[index] === arr[index + 1]){
       arr.splice(index, 1)
     }else{
       index++;
     }
   }
   return arr.length;
 }
