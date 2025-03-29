const formatData = (questionData) => {
  //restructure the data, in a form of question text,all 4 answers randomly ordered, and the index of the correct answer
  // category: "Entertainment: Cartoon &amp; Animations";
  // correct_answer: "Orion Pax";
  // difficulty: "medium";
  // incorrect_answers: (3)[("Long Haul", "P-138", "Teletran-1")];
  // question: "Before becoming the Autobot leader, Optimus Prime was known by what name on Cybertron?";
  // type: "multiple";
  const result = questionData.map((item) => {
    const questionObject = { question: decodeHTMLEntities(item.question) };
    //create answers array:
    const answers = [...decodeHTMLEntities(item.incorrect_answers)];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(
      correctAnswerIndex,
      0,
      decodeHTMLEntities(item.correct_answer)
    );
    //add the answers array to main object:
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex; //kind of extra job
    return questionObject;
  });
  return result;
};

function decodeHTMLEntities(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}

export default formatData;
