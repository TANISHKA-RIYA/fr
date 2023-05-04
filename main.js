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

function modelLoaded(){
    console.log("Model is loaded!!");
}

function check(){
img=document.getElementById("image");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+" %";
    }

}

//https://teachablemachine.withgoogle.com/models/_BiAbRpwa/