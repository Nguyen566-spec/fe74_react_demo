import React from 'react'
import { useProvider } from './provider/Provider'

const ChildProvider2 = () => {
  const data2 = useProvider();
  console.log("data2", data2);
  return (
    <div>ChildProvider2</div>
  )
}

export default ChildProvider2