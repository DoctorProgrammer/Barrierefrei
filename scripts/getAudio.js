async function getAudio(text) {
    let textToSpeak = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(textToSpeak);
}