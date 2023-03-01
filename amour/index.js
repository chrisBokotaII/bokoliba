const images= document.querySelectorAll(".images")
const pics=["image1","image2","image3","image4","image5","image6","image7","image8"]
const q1= document.getElementById("Q1").value;
const q2= document.getElementById("Q2").value;

for (let i = 0; i < images.length; i++) {
   const item= images[i]
 item.onmouseover=function () {
for (let i = 0;i< pics.length;i++){
  const randomNum= Math.floor(Math.random()*7+1)
   const element = pics[randomNum];
   document.body.style.backgroundImage = `url(amour/images/${element}.jpg)`
}  

      
   }
   
}

function question(){
  
   if(q1&&q2 ==="yes"||"oui"){
       alert("are you sure?")
   }else{
     alert("why?????????????")
   }
}

function hello(){
   alert("hello")
}

set(hello,1000);

 
