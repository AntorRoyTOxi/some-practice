function getElementByid(elementId){ 
      const element=document.getElementById(elementId); 
         const number=element.value; 
               const result=parseFloat(number);
   return result;
}; 
 function showResult(elementId,value){ 
     const  element=document.getElementById(elementId); 
       element.innerText=value;
 }