import React, { useState } from 'react'
import Login from './Login';


const Header = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  }
   
  return (
    <div className="full">
      <div className="header">
        <nav className='text'>
          <div className="right">
            <span>Add Resrurent</span>
            <span onClick={handleLogin} className='lg'>Login</span>
            <span>Sign in</span>
          </div>
        </nav>
        <div className='headercontent'>
          <img src='zomatologo.png' alt='' />
          <h1>Discover the best resturent,cafe and bars in India </h1>
        </div>
      </div>
      <div className="country">
        <h2>Populer locations in</h2>
        <div className="flag">
          <img src='india.png' alt='' />
          <h2>India</h2>
        </div>
      </div>
      <div className="decribe">
        <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
      </div>

      {login && <Login handleLogin={handleLogin}/>}
    </div>

  )
}

export default Header
