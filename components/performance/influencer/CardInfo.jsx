import React from 'react'

function CardInfo({ data }) {
  return (
    <div className='mx-auto text-xs text-gray-600'>
      <p>joined: {data.memberSince}</p>
      <p>email: {data.contact.email}</p>
      <p>phone: {data.contact.phone}</p>
    </div>
  )
}

export default CardInfo