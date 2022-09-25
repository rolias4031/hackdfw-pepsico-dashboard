import React from 'react'

function CardInfo({ data }) {
  return (
    <div className='mx-auto text-xs text-gray-600'>
      <p>media: {data.media}</p>
    </div>
  )
}

export default CardInfo