import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='react__header section__padding' id='home'>
        <div className='react__header-content slide-right'>
          <h1 className='gradient__text'>
            Let's Build Something of an amazing Future With Digital Art
          </h1>
          <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='react__header-content_input'>
            <input type="email" placeholder='Your Email Id....' />
            <button type='button'>Get Starter</button>
          </div>

          <div className='react__header-content_people'>
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
          
        </div>
        <div className='react__header-image'>
            <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header