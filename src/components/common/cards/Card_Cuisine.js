import React from 'react'
import "./Cards.css"


const Card_Cuisine = ({title, imageUrl, body}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
          <img src={imageUrl} alt=''/>
        </div>
        <div className='card-content'>
              <div className='card-title'>
                <h3>{title}</h3>
              </div>
              <div className='card-body'>
                <p>{body}</p>
              </div>
        </div>

        <div className="btn">
          <button>
            <a href='/cuisine'>
              View More
            </a>
          </button>
          </div>
    </div>
  )
}

export default Card_Cuisine