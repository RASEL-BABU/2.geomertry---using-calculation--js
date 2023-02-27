let serial=0;

//triangle section
document.getElementById('btn1').addEventListener('click',function(){
    serial++; //serial increase

    const inputValueString=document.getElementById('first-input').value;  //value read

    let inputValue=parseFloat(inputValueString); //convert string to float
    const a=inputValue;
    const inputValueFirstString=document.getElementById('second-input').value;
    if (!inputValueString || isNaN(inputValueString)||inputValueString ==''||inputValueString<=0||!inputValueFirstString || isNaN(inputValueFirstString)||inputValueFirstString ==''||inputValueFirstString<=0) {
        
        alert('Please enter a valid number');
        serial--;;
        return ;
      }
    //validation
       
let inputValueFirst=parseFloat(inputValueFirstString);
const h=inputValueFirst;
const Area=0.5*a*h;
const FormatArea=Area.toFixed(2); //fixed to digit number after decimal point



const  itemName=document.getElementById('triangle').innerText;

AddElement(serial,itemName,FormatArea);



})

//rectangle section

document.getElementById('btn2').addEventListener('click',function(){
   
serial++;
    const inputValue2String=document.getElementById('first-input2').value; 

    let inputValue2=parseFloat(inputValue2String);
    const W=inputValue2;
    const inputValueSecondString=document.getElementById('second-input2').value;

    if (!inputValue2String || isNaN(inputValue2String)||inputValue2String ==''||inputValue2String<=0||!inputValueSecondString || isNaN(inputValueSecondString)||inputValueSecondString ==''||inputValueSecondString<=0) {
        
      
        alert('Please enter a valid number');
        serial--;
        return ;
      }
    
       
let inputValueSecond=parseFloat(inputValueSecondString);
const l=inputValueSecond;
const Area=W*l;
const FormatArea=Area.toFixed(2)  //two decimal number  

const  itemName=document.getElementById('rectangle').innerText; //text value read





    AddElement(serial,itemName,FormatArea);









})
//parallegram

document.getElementById('btn-3').addEventListener('click',function(){
     serial++;  //increase 1 after one click

    const inputValue3String=document.getElementById('first-input3').value; 

    let inputValue3=parseFloat(inputValue3String);
    const b=inputValue3;
    const inputValueThirdString=document.getElementById('second-input3').value;
    if (!inputValue3String || isNaN(inputValue3String)||inputValue3String ==''||inputValue3String<=0||!inputValueThirdString || isNaN(inputValueThirdString)||inputValueThirdString ==''||inputValueThirdString<=0) {
    
        
        alert('Please enter a valid number');
        serial--;  //  give alert if you wrong input
        return ;
      }
       
let inputValueThird=parseFloat(inputValueThirdString);
const h=inputValueThird;
const Area=b*h;
const FormatArea=Area.toFixed(2)

const  itemName=document.getElementById('parallegram').innerText;


AddElement(serial,itemName,FormatArea);
})

//rhombus section

document.getElementById('btn-4').addEventListener('click',function(){
    serial=serial+1;

    const inputValue4String=document.getElementById('first-input4').value; 

    let inputValue4=parseFloat(inputValue4String);
    const d1=inputValue4;
    const inputValueFourString=document.getElementById('second-input4').value;
       
let inputValueFour=parseFloat(inputValueFourString);
const d2=inputValueFour;
const Area=0.5*d1*d2;
const FormatArea=Area.toFixed(2)
const  itemName=document.getElementById('rhombus').innerText;
AddElement(serial,itemName,FormatArea);
})

//pentagon section

document.getElementById('btn-5').addEventListener('click',function(){
    serial=serial+1;

    const inputValue5String=document.getElementById('first-input5').value; 

    let inputValue5=parseFloat(inputValue5String);
    const p=inputValue5;
    const inputValueFiveString=document.getElementById('second-input5').value;
       
let inputValueFive=parseFloat(inputValueFiveString);
const b=inputValueFive;
const Area=0.5*p*b;
const FormatArea=Area.toFixed(2)
const  itemName=document.getElementById('pentagon').innerText;
AddElement(serial,itemName,FormatArea);
})
// ellipse section

document.getElementById('btn-6').addEventListener('click',function(){
    serial=serial+1;

    const inputValue6String=document.getElementById('first-input6').value; 

    let inputValue6=parseFloat(inputValue6String);
    const a=inputValue6;
    const inputValueSixString=document.getElementById('second-input6').value;
       
let inputValueSix=parseFloat(inputValueSixString);
const b=inputValueSix;     //calculation section
const pi=3.14;
const Area=pi*a*b;
const FormatArea=Area.toFixed(2)

const  itemName=document.getElementById('ellipse').innerText;
AddElement(serial,itemName,FormatArea);  //function call
})







function AddElement(serial,itemName,Area){ //element adding function using  js
    const container= document.getElementById('table-container');
const tr=document.createElement("tr");

tr.innerHTML=`
<td>${serial}</td>
<td>${itemName}</td>
<td>${Area}cm<sup>2</td>
<td>
    <button class="btn btn-sm btn-red-500">convert to m<sup>2</button>
    </td>

`;
container.appendChild(tr);


}
function myFunction() {
   window.location.href=("blogpage.html") //link to blog page using function
  }

  //random color function 
  function changeBackground(element) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    element.style.backgroundColor = randomColor;


  }
  
  function resetBackground(element) {
    element.style.backgroundColor ='white';
  }