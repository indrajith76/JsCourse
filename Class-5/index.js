// var name = "Indrajith";
// console.log(name);

// let friendName = "Indrajith";

// friendName = "Jakir";
// friendName = "Kamol";

// console.log(friendName)

// const myName = "Indrajith Goswami";

// myName="Hridoy";

// console.log(myName);

// var myName = "Arup";
// console.log("My name is ", myName)

// var myName = "Sorup";
// console.log("My name is ", myName)

// const myName = "Arup";

// myName = "Arup";
// console.log(myName)

// let classMateName = "sarup";
// classMateName = "Rupok";
// classMateName = "Rony";
// console.log(classMateName);

// discussed about string variable
/* let name = "Forid";
let name2 = "forid";

if(name.toUpperCase() === name2.toUpperCase()) {

    console.log("Yes");
}
else{
    console.log("NO")
}
console.log(name.toUpperCase());
console.log(name.toLowerCase()); */

// Search operations
// -----------------------
// const paragraph = "amai Prosno kore nil dhubotara, ar koto kal ami robo disahara, robo disahara. Jobab kisui tar dite pari nai sudhu, avabe je kete galo ai jibono sara ai jibono sara.";

// const searchText = paragraph.includes("prosno");
// console.log(searchText)
// const searchText2 = "pRosNo";
// const searchResult = paragraph.includes(searchText2.toLowerCase())
// const searchResult = paragraph.toLowerCase().includes(searchText2.toLowerCase())
// console.log(searchResult);

// indexOf :
// const findTheIndexNo = paragraph.indexOf("prosno")
// const findTheIndexNo = paragraph.toLowerCase().indexOf("prosno")
// console.log(findTheIndexNo);

// startsWith and endsWith
// const message = "Hey Indra!, Are you single?";
// console.log(message.startsWith("Hello"))

const docFile = "loveLetter.doc";
const picture = "xyz.png";

// console.log(docFile.endsWith(".pdf"));

/* function findTheExt(text) {
  if (text.endsWith(".pdf")) {
    console.log("This is PDF file");
  }
  else if(text.endsWith(".png")){
    console.log("It's a PNG file");
  }
  else {
    console.log("It's not the file, we want!")
  }
}

findTheExt(docFile) */
/* 
const paragraph =
  "amai Prosno kore nil dhubotara, ar koto kal ami robo disahara, robo disahara. Jobab kisui tar dite pari nai sudhu, avabe je kete galo ai jibono sara ai jibono sara."; */

// const parts = paragraph.split(" ");
// const parts2 = paragraph.split(",");
// console.log(parts2)
// const paraSlice = paragraph.slice(0, 20)
// console.log(paraSlice)
// const paraSubstring = paragraph.substring(0,20)
// console.log(paraSubstring);

/* const paragraphArray = [
  "amai Prosno kore nil dhubotara",
  " ar koto kal ami robo disahara",
  " robo disahara. Jobab kisui tar dite pari nai sudhu",
  " avabe je kete galo ai jibono sara ai jibono sara.",
];

const newParagraph = paragraphArray.join(", ") */
// console.log("newParagraph: ",newParagraph);

// Math Operations
const checkPower = Math.pow(2, 3); // 2 ^ 3 = 8
// console.log(checkPower);

const nums = 300 - 500;
// console.log(nums)
const positiveOutput = Math.abs(nums);
// console.log(positiveOutput)

const weight = 2.5;
const round = Math.round(weight);
// console.log(round);

const ceilValue = Math.ceil(7.000002);
// console.log(ceilValue)

const floorValue = Math.floor(7.9);
// console.log(floorValue);

const otpNumber = Math.random() * 1000;

// console.log(otpNumber.toFixed(0))

const numbers = [11, 23, 34, 5, 6, 53, 9, 24, 1];
// console.log(Math.min(...numbers));

// value swapping
let coke = "cokeFull";
let orange = "orangeFull";

/* let tempGlass = coke;
coke = orange;
orange = tempGlass; */

[coke, orange] = [orange, coke];

// console.log("Coke:", coke, "Orange: ",orange);

// Reverse Operations with String
/* function reverseText(text) {
  let reversedString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const charter = text[i];
    reversedString = reversedString + charter;
  }
  return reversedString;
}

const myDialogue = "I am a gentle man";
const reverseOutput = reverseText(myDialogue);
console.log(reverseOutput) */

// Reverse Operations with String(based on word)
/* function reverseText(text) {
  const word = text.split(" ");
  let reverseSentance = [];
  for (let i = word.length - 1; i >= 0; i--) {
    const value = word[i];
    reverseSentance.push(value);
  }
  return reverseSentance.join(" ");
}

const myText = "I am a gentle man";
const Output = reverseText(myText);
console.log(Output); */
// ------------------------------
function reverseByWord(text){
    const words = text.split(" ");
    let newWords = []
    for(let i = words.length-1; i >= 0; i--){
        newWords.push(words[i])
    }
    console.log(newWords.join(" "));
}

const myStr = 'I want to be a Web Developer';
reverseByWord(myStr)