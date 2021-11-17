import React, { ReactElement } from 'react'
import './Home.css'

function index(): ReactElement {
  return (
    <div className="a4 grid grid-cols-3">
      <div className="sec-l-bg col-span-1 px-5">
        A
      </div>
      <div className="sec-r-bg col-span-2 px-5">
        B
      </div>
    </div>
  )
}

export default index
