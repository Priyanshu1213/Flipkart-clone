
import React, {useState} from 'react'

import { Link ,useNavigate} from 'react-router-dom';


import './Nav.css'

export default function Nav() {
  const nevigate=useNavigate();

  function TEMP(){
    nevigate("/login");
  }
  function HOME(){
    nevigate("/");
  }
  const [text, setText] = useState("");
    const onChange = (event) => {
      setText(event.target.value)
    };
    const print=()=>{
      console.log(text)
    }
      
  

  return (
    <div className="container">
      <div className="container1">
        <div className ="logo">
           <button  className='hj'  onClick={HOME}>          <img width="99" src="../image/flipkart.png"  class="png"/>
</button>
        
        </div>
        <div className ="search" >
          <input class="search1" 
          onChange={onChange}
          value={text} 
          type="text" title="Search for products, brands and more" name="q" autocomplete="off" placeholder="Search for products, brands and more" ></input>
          <button onClick={print} type='submit' className='search2'>Q</button>
        </div>
        {/* <Link to="login" >n */}
        <div className ="login" > 
        <button onClick={TEMP}>
          Login
        </button>
         </div>
        {/* </Link> */}
        
        <div className ="bas"> Become a Seller</div>
        <div className ="more"> More</div>
        <div className ="cart">Cart</div>

      </div>
    </div>
    )
}





 

 