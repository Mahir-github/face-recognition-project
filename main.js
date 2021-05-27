Webcam.set({
    width: 350,
    height: 300,
    Image_Format: "png",
    png_qualty: 90
})
Camera = document.getElementById("camera")
Webcam.attach("#Camera")

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>'
    });
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zb7t0Qh-Y/.json", modelLoaded)
