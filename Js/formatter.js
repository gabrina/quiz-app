const formatData = (questionData) => {
  //restructure the data, in a form of question text,all 4 answers randomly ordered, and the index of the correct answer
  // category: "Entertainment: Cartoon &amp; Animations";
  // correct_answer: "Orion Pax";
  // difficulty: "medium";
  // incorrect_answers: (3)[("Long Haul", "P-138", "Teletran-1")];
  // question: "Before becoming the Autobot leader, Optimus Prime was known by what name on Cybertron?";
  // type: "multiple";
  const result = questionData.map((item) => {
    const questionObject = { question: item.question };
    //create answers array:
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.correct_answer);
    //add the answers array to main object:
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex; //kind of extra job
    return questionObject;
  });
  return result;
};

// function decodeHTMLEntities(text) {
//   const newText = text
//     .replace(/&#039;/g, "'")
//     .replace(/&quot;/g, '"')
//     .replace(/&amp;/g, "&");
//   return newText;
// }

export default formatData;
