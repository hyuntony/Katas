const urlEncode = function(text) {
  let characterArray = [];
  let emptyIndexOutsideString = [];
  let finalString = "";
  for (let i = 0; i < text.length; i++) {    //change string into array
    characterArray.push(text[i]);
  }
  for (let i = 0; i < characterArray.length; i++) {    //searching for white space outside string before string
    if (characterArray[i] == " ") {
      emptyIndexOutsideString.push(i);
    } else if (characterArray[i] !== " ") {
      break;
    }
  }
  for (let i = characterArray.length - 1; i > -1; i--) {  //searching for white space outside string after string
    if (characterArray[i] == " ") {
      emptyIndexOutsideString.push(i);
    } else if (characterArray[i] !== " ") {
      break;
    }
  }
  for (let i = 0; i < emptyIndexOutsideString.length; i++) {  //removing white space outside string
    characterArray.splice(emptyIndexOutsideString[i],1);
  }
  for (let i = 0; i < characterArray.length; i++) {  // changing " " into "%20"
    if (characterArray[i] == " ") {
      characterArray.splice(i,1,"%20");
    }
  }
  for (let character of characterArray) {   // converting array to string
    finalString += character
  }
  return finalString;  
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));