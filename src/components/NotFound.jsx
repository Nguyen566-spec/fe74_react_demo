import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h2>Not found</h2>
      <button className='btn btn-dark' onClick={() => navigate('/')}>Go home</button>
    </div>
  )
}

export default NotFound