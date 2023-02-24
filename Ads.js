import React, {useState} from 'react'
import './Ads.css'


//  const Image =[
//     "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2d4d397acfc980f0.jpeg?q=50",
//     "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/183ca38aa3dc6f9c.jpg?q=50" ,
//      "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c1849242edab16a3.jpg?q=50",
//      "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/46b1e6f02433ed9c.jpg?q=50",
//      "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/00016bbdb4e6aae4.jpg?q=50 ",
//      "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/183ca38aa3dc6f9c.jpg?q=50 "]
let Image=[];
Image.push("https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2d4d397acfc980f0.jpeg?q=50")
Image.push("https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c1849242edab16a3.jpg?q=50")
Image.push("https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2d4d397acfc980f0.jpeg?q=50")
Image.push("https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c1849242edab16a3.jpg?q=50")
 
Image.push("https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2d4d397acfc980f0.jpeg?q=50")
Image.push("https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c1849242edab16a3.jpg?q=50")
 
 
 
//  export const selectedimage ="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/183ca38aa3dc6f9c.jpg?q=50 ";
export default function Ads(){
   
    
     let temp;
    const [urll,setUrl]= useState(0)
    // const onChange = (event) => {
        // setUrl(event.target.value)
    // }
    const next =()=>{
        
        if (urll==Image.length-1) {
            
            
              setUrl(0);
              
            
          } else {
            
              setUrl(urll +1);
              console.log(urll);
            
          }
           temp=Image[urll];
           console.log(temp);
           
          
    };

    return (
    <div className='adss'>
        <div className='adss1'   >
          
          {/* {Image.map(({Image}) => ( */}
            <img src={Image[urll]} alt="adss" className='style'  />
          {/* ))} */}
            
        
        <button  type="Button" class="btul" >L</button>
        <button onClick={next} type="Button" class="btur">R</button>
        
        </div>

        <h1> {Image[urll]}</h1>


    </div>
    )
}