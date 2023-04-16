import React from 'react'
import { useProvider } from './provider/Provider'

const ChildProvider = () => {
  const data = useProvider();
  console.log('data', data);
  return (
    <div>ChildProvider</div>
  )
}

export default ChildProvider