Webcam.set({
    width:350, height:300, image_format:'jpg', jpg_quality:90, dest_width:340
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot(){
    Webcam.snap(function(data_url){
   document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_url+"'>";
    });
}
console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4Ey0ONPPj/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function checkimage(){
    img=document.getElementById("captured_image");
    classifier.classify(img,getresult);
}
function getresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("accuracy_object").innerHTML=result[0].confidence.toFixed(3);
    }
}