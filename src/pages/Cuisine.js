import React from 'react'
import "./styles/Cuisine.css"


const Cuisine = () => {
  return (
    <section className='whole-content'>
    <div className='cuisine-content'>
      <img src='../photos/Carbonara.jpg'/>
      <div className='texts'>
        <h1>
          Classic Carbonara
        </h1>
        <h5>The <span>Original Recipe</span></h5>
        <p>
        To do as the Romans do, pick up some guanciale and Pecorino Romano cheese. If you can't find them, just substitute bacon and Parmigiano Reggiano. In regard to pasta, the classic shape is tonnarelli, a long pasta, but spaghetti, mezze maniche, and rigatoni also work well. And don't forget the eggs and freshly ground black pepper.
        </p>
      </div>
    </div>
    </section>
  )
}

export default Cuisine