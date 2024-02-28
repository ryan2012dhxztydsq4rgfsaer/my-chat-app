var speechrecognition = window.webkitspeechrecognition;

var regognition = new speechrecognition();

function Start()
{
document.getElementById("textbox").innerHTML = ""
Recognition.start()
}


recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0] [0].transcript

    document.getElementById("textbox").innerHTML = content
    console.log(content)
}

function speak(){

    var synth = speech.synthesis
    speak_data = document.getElementById("textbox").value
    var utterthis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    webcam.attach(camera)
}


Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
camera.getElementById("camera")
