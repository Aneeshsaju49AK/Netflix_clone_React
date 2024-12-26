import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { logout } from '../../firebase';

const Navbar = () => {
  const navRaf = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRaf.current.classList.add('nav-dark')
      }else{
        navRaf.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRaf} className='navbar'>
      <div className='navbar-left'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="search" className='icons'/>
        <p>Children</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="bell" className='icons'/>
        <div className="navbar-profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="bell" className='profile'/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="bell" className='icons'/>
        <div className='dropdown'>
          <p onClick={()=>{logout()}}>Sign out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
