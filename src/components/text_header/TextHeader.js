import React from 'react'

export const TextHeader = (props) => {
  const { header, size} = props
  return (
    <div>
      <h1 style={{fontSize:`${size}`}}>
        {header}
      </h1 >
    </div>
  )
}
