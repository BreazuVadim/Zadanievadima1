const str = 'Download financial statements PDF';
const strToLowerCase = str.toLowerCase();

let result = '';
for (let i = 0; i < strToLowerCase.length; i++) {  
  const letter = strToLowerCase[i]; 

    if(letter === ' ') {
    result += strToLowerCase[i + 1].toUpperCase(); 
    } else if ( letter && strToLowerCase[i - 1] === ' ') {
    result += '';  
    } else {
    result += letter  
    }

}   console.log(result)
