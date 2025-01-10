import { useState } from 'react'

function App() {

  let [message, setMessage] = useState()
 
  let positive = (e) =>{
    let number = e.target.value;
    if(number < 0){
      setMessage("Enter only positive numbers")
      setTimeout(() =>{
        setMessage("")

      },2000)
      
    }


  }
  let even = (e) =>{
    let number = e.target.value;
    let data = document.getElementById("message2");
    data.innerText = "";
    let num = 0;
 

      if(number % 2 == 0){
       for(let i = 1; i<= 3; i++){
        let b = i!=3?",": " ";
       
        data.innerText += parseInt(number) + i * 2  + b;
        
       }
      

      }
      else{
        data.innerText = "enter only even number";
      }
    
    
  }
  let odd = (e) =>{
    let number = e.target.value;
    let data = document.getElementById("message3");
    data.innerText = "";
    

      if(number % 2 != 0){
       for(let i = 1; i<= 3; i++){
        let b = i!=3?",": " ";
       
        data.innerText += parseInt(number) + i * 2  + b;
        
       }
      

      }
      else{
        data.innerText = "enter only odd number";
      }
    
    
  }


  return (
    <>
    <h1 style={{display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "bold"}}>test</h1>
    <div style={{marginTop: "200px"}}>
     <span>for positive numbers</span>
     <input type='number' style={{width: "200px", height: "30px", border: "solid 2px"}} onChange={positive}/>
     <div id = "message1">{message}</div>
    </div>
    <div style={{marginTop: "20px"}}>
    <span>Even Numbers</span>
    <input type='number' style={{width: "200px", height: "30px", border: "solid 2px"}} onChange={even}/>
    <div id = "message2"></div>

    </div>
    <div style={{marginTop: "20px"}}>
    <span>Odd Numbers</span>
    <input type='number' style={{width: "200px", height: "30px", border: "solid 2px"}} onChange={odd}/>
    <div id = "message3"></div>

    </div>
      
    </>
  )
}

export default App
