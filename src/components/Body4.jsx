import './Body4.css'
import Body3 from './Body3'
import profile from '../assets/profile.svg'
import testimonies from '../assets/Testimonies.svg'
import curves from '../assets/curves.svg'
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'

const Body4 = () => {
  return (
    <div>
        <Body3 />

        <div>
            <div className='testimony'>
                <img className='testimonies' src={testimonies} alt="" />
                <div style={{position: 'relative'}}>
                    <img className='curves' src={curves} alt="" />
                </div>

                <div className='slide'>
                    <img style={{marginRight: '31px', marginTop: '25px'}} src={leftarrow} alt="" />

                    <div className='tweet'>
                        <p className='quote'> <span>“ </span> Let's dance is the best platform to learn and improve your dancing skills anywhere in the world. <span> ”</span></p>
                        <div className='profile' style={{marginLeft: '48px'}}>
                            <img src={profile} alt="" />
                            <div style={{marginTop: '12px', marginLeft: '5px'}}>
                                <p className='profilename'>Franklin Edwards</p>
                                <p className="medium">On Twitter</p>
                            </div>
                        </div>
                    </div>

                    <img style={{marginLeft: '47px', marginTop: '25px'}} className='right' src={rightarrow} alt="" />
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Body4