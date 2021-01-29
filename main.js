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
