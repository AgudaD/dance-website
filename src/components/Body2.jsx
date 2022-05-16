import './Body2.css'
import Body1 from './Body1'
import bluex from '../assets/blue x.svg'
import video from '../assets/video.svg'
import orangex from '../assets/orange x.svg'
import pinkx from '../assets/pink x.svg'
import whatwedo from '../assets/What we do.svg'


const Body2 = () => {
  return (
    <div>
        <Body1 />

        <div>
            {/* <h2 >What we do</h2> */}
            <img className='infoheading' src={whatwedo} alt="" />

            <img style={{marginTop: '35px', marginLeft: '712px'}} src={bluex} alt="" />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <img src={orangex} alt="" />
               <img style={{marginTop: '32px', marginLeft: '119px'}} src={video} alt="" /> 
            </div>
            
            <img style={{marginTop: '53px', marginLeft: '826px',}} src={pinkx} alt="" />

            
            <div className='readmore'>
                <span style={{fontSize: '25px', marginLeft: '669px', }}>&#8594;</span>
                <p className='scrolltxt'>Read down
            <div style={{
              width: '93px',
              border: '1px solid',
              // borderRadius: '5px',
              backgroundColor: 'black',
              marginLeft: '2px'
            }}></div></p>
            </div>
        </div>
        

    </div> 
  )
}

export default Body2
