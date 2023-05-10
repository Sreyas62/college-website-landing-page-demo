import './styles.css';
import Link from 'next/link';

function Notification() {
  return (
    <>
        <div className='combined1'>
            <div className='noti' data-aos="fade-right">
                <h6>NOTIFICATIONS</h6>
                <ul>
                    <li><Link href="/" className='L'>Admission Started</Link></li>
                    <li><Link href="/" className='L'>(supplementary and course repeat) to B.Tech S4 (S,FE) Exam
May 2023 (2015 Scheme)</Link></li>
                    <li><Link href="/" className='L'>Applications are invited for various free vocational courses at IHRD</Link></li>
                    <li><Link href="/" className='L'>AExam Registration to B.Tech S6 (S) Exam May 2023 (2019 Scheme)-supplementary</Link></li>
                    <li><Link href="/" className='L'>Interview for Guest ( faculty & supporting staff) 2022 – 2023</Link></li>
                    <li><Link href="/" className='L'>Fee Struture - Notice</Link></li>
                </ul>
                <Link href="/" className='L'>More&gt;&gt;&gt;&gt;</Link>

            </div>
            <div className='events' data-aos="fade-up">
                <div>
                    <h6>EVENTS</h6>
                    <div className='full'>
                        <div className='dd'>
                            <div className='date'>
                                <h6 className='bold'>22</h6>
                            </div>
                            <div className='month'>
                                <h6>MAY</h6>
                            </div>
                        </div>
                        <div className='event'>
                            <p>Summer Internship</p>
                        </div>
                    </div>
                    <div className='full'>
                        <div className='dd'>
                            <div className='date'>
                                <h6 className='bold'>26</h6>
                            </div>
                            <div className='month'>
                                <h6>APRIL</h6>
                            </div>
                        </div>
                        <div className='event'>
                            <p>Maker Station</p>
                        </div>
                    </div>
                    <div className='full'>
                        <div className='dd'>
                            <div className='date'>
                                <h6 className='bold'>22</h6>
                            </div>
                            <div className='month'>
                                <h6>APRIL</h6>
                            </div>
                        </div>
                        <div className='event'>
                            <p>MakerSpace Initiative</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='combined2'>
            <div className='noti2' data-aos="fade-up">
                <div>
                    <h6>EVENTS</h6>
                    <div className='full'>
                        <div className='dd'>
                            <div className='date'>
                                <h6 className='bold'>22</h6>
                            </div>
                            <div className='month'>
                                <h6>MAY</h6>
                            </div>
                        </div>
                        <div className='event'>
                            <p>Summer Internship</p>
                        </div>
                    </div>
                    <div className='full'>
                        <div className='dd'>
                            <div className='date'>
                                <h6 className='bold'>22</h6>
                            </div>
                            <div className='month'>
                                <h6>MAY</h6>
                            </div>
                        </div>
                        <div className='event'>
                            <p>Summer Internship</p>
                        </div>
                    </div>
                    <div className='full'>
                        <div className='dd'>
                            <div className='date'>
                                <h6 className='bold'>22</h6>
                            </div>
                            <div className='month'>
                                <h6>MAY</h6>
                            </div>
                        </div>
                        <div className='event'>
                            <p>Summer Internship</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='events2' data-aos="fade-right">
                <h6>NOTIFICATIONS</h6>
                <ul>
                    <li><Link href="/" className='L'>Admission Started</Link></li>
                    <li><Link href="/" className='L'>(supplementary and course repeat) to B.Tech S4 (S,FE) Exam
May 2023 (2015 Scheme)</Link></li>
                    <li><Link href="/" className='L'>Applications are invited for various free vocational courses at IHRD</Link></li>
                    <li><Link href="/" className='L'>AExam Registration to B.Tech S6 (S) Exam May 2023 (2019 Scheme)-supplementary</Link></li>
                    <li><Link href="/" className='L'>Interview for Guest ( faculty & supporting staff) 2022 – 2023</Link></li>
                    <li><Link href="/" className='L'>Fee Struture - Notice</Link></li>
                </ul>
                <Link href="/" className='L'>More&gt;&gt;&gt;&gt;</Link>

            </div>
            
        </div>
    </>
  )
}

export default Notification