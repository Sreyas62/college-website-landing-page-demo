import './styles.css';
import Link from 'next/link';
import {BiArrowToTop} from 'react-icons/bi';
function Footer() {
  return (
    <>
    <div className='top'><Link className='lin' href='#home' id="locate">
      <BiArrowToTop size="50px" color="white" className='ictop'/>
      </Link></div>
    
    <div className='foot'>Developed by &nbsp; <Link href={"http://www.linkedin.com/in/sreyas-m-pillai/"}><button className='bb'><h6 className='name'>Sreyas M Pillai</h6></button></Link></div>
    </>
  )
  
}

export default Footer