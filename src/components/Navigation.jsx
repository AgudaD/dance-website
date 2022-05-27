import './Navigation.css'
import logo from '../assets/logo.svg'
import diamond from '../assets/diamond.svg'

const Navigation = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt=''/>
          <h4>Let's Dance!</h4>
        </div>

        <div className="nav">
            <button className='active about'> Home <div style={{
              width: '23px',
              height: '3px',
              borderRadius: '5px',
              backgroundColor: '#2F2E2E',
              marginLeft: '28px',
              marginTop: '4px',
              textAlign: 'center',
            }}></div></button>
            <button className='about'>About Us</button>
            <button className='about'>Sign-in</button>
            <button className='login'>Login</button>
        </div>

      </div>

      <div style={{position: 'relative', marginTop: '130px'}}>
            <img className='diamond' src={diamond} alt="" />
      </div>

    </div>
  )
}

export default Navigation;