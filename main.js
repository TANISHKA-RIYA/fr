Webcam.set({
    width:350,
    height:300,
    img_format:"png",
    png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='image' src='"+data_uri+"'></img>";
    });
}

console.log("ml5 version",ml5.version);


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_BiAbRpwa/model.json",modelLoaded)

//https://teachablemachine.withgoogle.com/models/_BiAbRpwa/