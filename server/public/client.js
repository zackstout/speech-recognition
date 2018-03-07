
// This is all aaron's code:
// Wait he was missing parentheses for call?
let recog = new webkitSpeechRecognition();
// let ss = speechSynthesis;
// let welcome = new SpeechSynthesisUtterance('おかえりなさい');
// let result = document.getElementById('result');

// recog.lang = 'ja-JP';


// Called when speech is done:
// Omg it really works: That's amazing.
recog.onresult = function(event) {
  console.log(event);
  // let text = event.results[0][0].transcript;
  // result.textContent = text;
  // if (text.includes('ただいま')) {
  //   ss.speak(welcome);
  // }
};


// speechSynthesis.onvoiceschanged = () => {
//   welcome.voice = speechSynthesis.getVoices()[18];
// };

// Starts listening, inviting microphone:
recog.start();
