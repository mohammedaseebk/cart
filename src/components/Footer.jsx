import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

      <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-primary text-light '>
        <div className='d-flex justify-content-center align-items-center w-100 flex-column'>
          <div className='footer d-flex align-items-center justify-content-evenly w-100'>
            <div className='websites' style={{width:'400px'}}>
              <h4 style={{overflowY:'hidden'}}><i class="fa-solid fa-cart-shopping">E-CART</i>{' '}</h4>
    
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste aspernatur voluptas asperiores laudantium sequi illum rerum dolor quos, modi ratione, magnam temporibus nisi reiciendis iure iusto! Molestias, facere suscipit.</h6>
            </div>
            
            <div className='links d-flex flex-column'>
              <h4 style={{overflowY:'hidden'}}>Links</h4>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
              <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
              <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>WishList</Link>
    
            </div>
    
            <div className="guides d-flex flex-column">
              <h4 style={{overflowY:'hidden'}}>Guides</h4>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link>
              <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
              <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
            </div>
    
            <div className="contacts">
              <h4 style={{overflowY:'hidden'}}>Contact Us</h4>
              <div className='d-flex mb-3'>
                <input type="text" className='form-control me-3' placeholder='Enter your Email ID'/>
                <button className='btn btn-warning'>Subscribe</button>
              </div>
    
              <div className='d-flex justify-content-evenly align-items-center'>
                <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
                <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
                <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
              </div>
            </div>
    
          </div>
                <p className='mt-5'>Copyright © 2023 E-CART. Built with React.</p>
    
        </div>
      </div>
  )
}

export default Footer