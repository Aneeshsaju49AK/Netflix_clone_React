import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>

        <img className='banner-img' src="https://img.youtube.com/vi/YQQD67N5pi0/maxresdefault.jpg" alt="" />
        <div className="hero-caption">
          <img className='caption-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, debitis aliquam! Ab nemo commodi harum corrupti labore tenetur accusamus sunt laborum vitae delectus. Aspernatur velit inventore, ad eum beatae nostrum.</p>
          <div className="hero-btns">
            <button className='btn'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="" />Play</button>
            <button className='btn dark-btn'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJFERSVAfgaByGZ1-9VBoD67fE1nnUvzuuGszRdISrbmB2kZnvwyr5LE&s" alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>


      </div>
       <div className="more-cards">
        <TitleCards title={"Blokbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
       </div>
       <Footer/>
    </div>
  )
}

export default Home
