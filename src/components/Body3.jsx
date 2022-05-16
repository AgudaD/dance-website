import React from 'react'
import './Body3.css'
import Body2 from './Body2'
import dancingman from '../assets/dancing man.svg'
import teacher from '../assets/teacher.svg'
import rates from '../assets/rates.svg'
import clock from '../assets/clock.svg'
import letsdance from '../assets/Why Lets dance.svg'

const Body3 = () => {
  return (
    <div >
      <Body2 />

      <div style={{backgroundColor: '#faf4f9', padding: '32px' }}>
          {/* <h2 className='infoheader'>Why Let's dance!</h2> */}
          <img className='infoheader' src={letsdance} alt="" />

          <div className='sections'>
              <img style={{marginRight: '30px',}} src={dancingman} alt="" />

              <div className='block'>
                  <img style={{marginLeft: '111px', marginTop: '31px'}} src={teacher} alt="" />
                  <p className='blockheading'>Professionsal dance instructors</p>
                  <p className='blockinfo'>Get tutored by the best dancers and improve your dance skills by listening, 
                  taking notes and asking your instructors questions.</p>
                  <p className='learnmore'>Learn more <span style={{color: '#F980BF;'}}>&#8594;</span></p>
              </div>

              <div className='block'>
                  <img style={{marginLeft: '111px', marginTop: '31px'}} src={clock} alt="" />
                  <p className='blockheading'>Flexible Schedule</p>
                  <p className='blockinfo'>You can choose your dance at the time you feel most convinient. We do this to ensure students can adapt and learn at their own pace.</p>
                  <p className='learnmore'>Learn more <span style={{color: '#F980BF;'}}>&#8594;</span></p>
              </div>

              <div className='block'>
                  <img style={{marginLeft: '111px', marginTop: '31px'}} src={rates} alt="" />
                  <p className='blockheading'>Affordable rates</p>
                  <p className='blockinfo'>We ensure we make our services affordable to customers with the best dance instructors and access to quality materials. </p>
                  <p className='learnmore'>Learn more <span style={{color: '#F980BF;'}}>&#8594;</span></p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Body3
