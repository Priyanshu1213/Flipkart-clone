import React from 'react'

import { useNavigate } from 'react-router-dom'

export  default function Login() {
   const nevi= useNavigate();
  function rahul() {
   nevi("/")
   
  }
  
  return (<>
      <div>helloo</div>

    <button onClick={rahul}>Continue</button>
    </>
  )
}
