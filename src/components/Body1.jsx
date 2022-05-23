import './Body1.css'
import Navigation from './Navigation'
import dancinglady from '../assets/dancing lady.svg'
import bluex from '../assets/blue x.svg'
import orangex from '../assets/orange x.svg'
import pinkx from '../assets/pink x.svg'

const Body1 = () => {
  return (
    <div style={{backgroundColor: '#faf4f9', height: '882px'}}>
        <Navigation />
        
        <div className='main'>
          <div className='info'>
            <p className='info-title'>Learn how to dance anywhere in the world</p>
            <p className='main-info'>Dance ryhthmically with a sequence of steps from the comfort of your homes through online classes</p>
            <img src={pinkx} alt="" />
          </div>
          <div className='lady-div'>
            {/* <img className='blue' src={bluex} alt="" />
            <img className='orange' src={orangex} alt="" /> */}
            <img className='dancelady' src={dancinglady} alt="" />
            <div className='box1'></div>
            <div className="box2"></div>
          </div>

          <div className='scroll'>
            <span className='downarrow' style={{fontSize: '18px', }}>&#8595;</span>
            <p className='scrolltxt'>Scroll down
            <div className='line' style={{
              width: '94px',
              border: '1px solid',
              // borderRadius: '5px',
              backgroundColor: 'black',
              marginTop: '4px',
              marginLeft: '2px'
            }}></div></p>
          </div>
            
        </div>

        <div className='ellipses'>
            <div className='ellipse1'></div>
            <div className='ellipse2'></div>
            <div className='ellipse3'></div>
            <div className='ellipse4'></div>
            <div className='ellipse5'></div>
        </div>

        
    </div>
  )
}

export default Body1