// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure=transform(oldPointStructure);

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


let scrabbleScore=function(oneWord){
  let pointScore=oneWord.toLowerCase();
   let newScrabbleScore=0;
for (let i = 0; i < pointScore.length; i++){
newScrabbleScore += Number(newPointStructure[pointScore[i]]);
}

  return newScrabbleScore;
}
// single words, two words with space returns *obvious* error^

function initialPrompt(wordInput) {
   console.log("Let's play some scrabble! \n");
   wordInput=input.question("Enter a Word to score: ");
    return wordInput
};

let simpleScore=function(oneWord){ 
  let pointScore; 
   pointScore = oneWord.length;

    return pointScore;
      }
  
const vowelStr= {
  1: [ 'L', 'N', 'R', 'S', 'T','D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z'],
  3: ['A', 'E', 'I', 'O','U',]
};
// I wish i knew how to code "sometimes y"^
let vowelBonusScore=function (oneWord){

  let pointScore=oneWord.toUpperCase();
  
  let newvowelScoreValue=0;
for (let i = 0; i < pointScore.length; i++) {
 
	  for (const vowelScoreValue in vowelStr) {
 
		 if (vowelStr[vowelScoreValue].includes(pointScore[i])) {
       newvowelScoreValue+=parseInt(vowelScoreValue);
		 }
	  }
	}
	return newvowelScoreValue;
  }

  


function oldScrabbleScorer(oneWord){
  scrabbleScore=oneWord.toUpperCase();
    let newScrabbleScore=0;
for (let i = 0; i < scrabbleScore.length; i++) {
 
	  for (const scrabbleScoreValue in oldPointStructure) {
 
		 if (oldPointStructure[scrabbleScoreValue].includes(scrabbleScore[i])) {
       newScrabbleScore+=parseInt(scrabbleScoreValue);
    }
    }
  }
    return console.log(`Score for ${scrabbleScore}: ${newScrabbleScore} \n`);
}
// new score uses the old scoring structure here^


const scoringAlgorithms = [
  {
    'name': 'Simple Score',
    'Description':'One point per character',
    'scoringFunction': simpleScore
  },

   {
    'name': 'Vowel Bonus Score',
    'Description':'Vowels are worth 3 points',
    'scoringFunction': vowelBonusScore
  },
  
   {
    'name': 'Scrabble Score',
    'Description':'Uses scrabble point system',
    'scoringFunction': scrabbleScore
  }
  
  ];

function scorerPrompt(wordInput2) {
  
  const input1 = require('readline-sync');
  let selectAlgorithms = input1.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

  if (selectAlgorithms==0){    
       let xpoint=scoringAlgorithms[0].scoringFunction(wordInput2);
       console.log(`Score for ${wordInput2}: ${xpoint} \n`);
       
  }     
     else if(selectAlgorithms==1){
       let xpoint=scoringAlgorithms[1].scoringFunction(wordInput2);
       console.log(`Score for ${wordInput2}: ${xpoint} \n`);
     }
     else if(selectAlgorithms==2){
       let xpoint=scoringAlgorithms[2].scoringFunction(wordInput2);
       console.log(`Score for ${wordInput2}: ${xpoint} \n`);
       
     }
     
       return "";
}




function transform(oldPointObject) {
  let newPointStructure={};
       for (let item in oldPointObject) {
for (let i = 0; i < oldPointObject[item].length; i++) {
  newPointStructure[(oldPointObject[item][i]).toLowerCase()] = Number(item);
}


}

return newPointStructure;

}

  
function runProgram() {
  //newPointStructure=transform(oldPointStructure);
   let wordInput1=initialPrompt();
   console.log(scorerPrompt(wordInput1));  
   
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

