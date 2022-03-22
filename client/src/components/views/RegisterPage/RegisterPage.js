import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../../../_actions/user_action'


function RegisterPage(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const  [Email, setEmail] = useState("")
  const  [Name, setName] = useState("")
  const  [Password, setPassword] = useState("")
  const  [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  // document.addEventListener('DOMContentLoaded', () => {
  //   const p = document.querySelector('p')
  //   const input = document.querySelector('#input1')
  //   console.log(p)
  //   input.addEventListener('keyup', () => {
  //     if(Password !== ConfirmPassword){
  //       alert('뭐하냐')
  //       p.textContent = '비밀번호가 같지 않습니다'
        
  //     }
  //   })
  // })

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(Password !== ConfirmPassword){
      return alert('비밀번호가 같지않습니다.')
    }

    let body = {
      email: Email,
      name: Name,
      password: Password
    }

    dispatch(signupUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate('/LoginPage')
        } else {
          alert('Error')
        }
    })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} id="input1" />
        {/* <p>안녕</p> */}
        <br />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
