import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../../_actions/user_action'

function LandingPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => {console.log(response.data)})
  }, [])

  const onClickHandler = () => {
    dispatch(logoutUser())
      .then(response => {
        if (response.payload.LogoutSuccess) {
          navigate('/login')
        } else {
          alert('Error')
        }
    })
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: '100%', height: '100vh'}}>
      <h2>
        시작 페이지
      </h2>

      <button  onClick={onClickHandler}>
        Logout
      </button>
    </div>
  )
}

export default LandingPage
