
// This is all aaron's code:
// Wait he was missing parentheses for call?
let recog = new webkitSpeechRecognition();



// all right this makes it listen...but not for new things...
recog.continuous = true;
recog.interimResults = true;


// recog also has .onstart, .onend, and .onerror methods.

let ss = speechSynthesis;
let welcome = new SpeechSynthesisUtterance('Ahoy there mate-ee');
// let result = document.getElementById('result');
// ss.speak(welcome);
recog.lang = 'es';


// Called when speech is done:
// Omg it really works: That's amazing.
recog.onresult = function(event) {
  var text = event.results[0][0].transcript;
  console.log(text);
  if (text.includes("Hello")) {
    ss.speak(welcome);
  }
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
