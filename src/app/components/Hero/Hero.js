'use client'
import "./styles.css";
import Carousel from 'react-bootstrap/Carousel';
import Link from "next/link";
function Hero() {
  const email = 'principal@ceconline.edu';
  const subject = '';
  const body = '';
  return (
    <div className="hero">
        <div className="hero1">
            <img className="logo" src="/logo.png" alt="logo" />
            <b><h1 className="title">COLLEGE OF ENGINEERING <br/>CHENGANNUR</h1></b>
            <p className="discp">The College of Engineering Chengannur (CEC), was established by the Government of Kerala under the aegis of the IHRD, in the year 1993. It has been approved by All India Council for Technical Education (AICTE) and affiliated to APJ Abdul Kalam Technological University (KTU).</p>
            <Link className="aa" href={`mailto:${email}?subject=${subject}&body=${body}`}><button className="btn1">Contact Now</button></Link>
        </div>
        <div>
        <Carousel fade indicators={false} controls={true} className="car">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/college.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/tharang.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/placement.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/placement1.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/tchrs.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/college1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
        
    </div>
  )
}

export default Hero