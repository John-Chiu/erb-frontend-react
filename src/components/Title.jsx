import React from 'react'

function Title({ mainTitle, subTitle }) {
  return (
    <div className='section-title'>
        <h2>
            {mainTitle} <span>{subTitle}</span>
        </h2>
    </div>
  )
}

export default Title