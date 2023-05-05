import "./styles.css";
function Hero() {
  return (
    <div className="hero">
        <div className="hero1">
            <img className="logo" src="/logo.png" alt="logo" />
            <b><h1 className="title">COLLEGE OF ENGINEERING <br/>CHENGANNUR</h1></b>
            <p className="discp">The College of Engineering Chengannur (CEC), was established by the Government of Kerala under the aegis of the IHRD, in the year 1993. It has been approved by All India Council for Technical Education (AICTE) and affiliated to APJ Abdul Kalam Technological University (KTU).</p>
            <button className="btn">Contact Now</button>
        </div>
        <div>
            <img className="college" src="/college.png" alt="hero" />
        </div>
    </div>
  )
}

export default Hero