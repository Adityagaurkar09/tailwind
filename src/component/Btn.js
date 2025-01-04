import React from 'react'

function Btn({title , onClick, varient="primary"}) {

    const btn_varient ={
        primary : "bg-blue-400",
        danger: "bg-red-400",
        success:"bg-green-400",
    }
  return (
    <div>
       <button className={`${btn_varient[varient]} text-lg text-white px-5 py-1 rounded-lg mr-10`}
       type='button'
        onClick={onClick}
       >{title}
       </button>
    </div>
  )
}

export default Btn
