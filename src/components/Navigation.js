import React from "react";
import { Link } from "react-router-dom";
import reactLogo from '../images/react.svg';

const logoWrapper = {
    display: 'block',
    width : '150px',
    float : 'left',
    textAlign : 'center'
};

const Navigation = props => {
  const is_Login = JSON.parse(localStorage.getItem("is_Login"));
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem('full_name');
  console.log('is_Login', is_Login);

  if (is_Login == null){
    return (
    <div className="container-fluid">
    <div className="row">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <div className="col-md-2 col-sm-6 offset-md-0">
      <div className="myLogo">
        <p style={{float:"left", marginTop:"12px", marginRight:"12px"}}>RidhoRosa </p>
        <img src={reactLogo} style={{width:"25%"}}/>
      </div>
    </div>    
    
    <div className="col-md-8 col-sm-6 offset-md-5">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:"15px"}}>
        <ul className="navbar-nav mr-auto ">
            <li className='menu'>
                <Link to='/signin'>Sign In</Link>
            </li>
            <li className='menu'>
                <Link to='/signup'>Sign Up</Link>
            </li>
            <li className='menu'>
                <Link to='/'>Home</Link>
            </li>
            <li className='menu'>
                <Link to='/news'>News</Link>
            </li>
            <li className='menu'>
                <Link to='/profile'>Profile</Link>
            </li>
            <li className='menu'>
                <Link to='/signin' onClick={() => props.postSignut()} >SignOut</Link>
            </li>
        </ul>
        </div>
      </div>

      
  </nav>
</div>
</div>
    )
  } else {

    return (
        <div className="container-fluid">
            <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="col-md-2 col-sm-6 offset-md-0">
              <div className="myLogo">
                <p style={{float:"left", marginTop:"12px", marginRight:"12px"}}>RidhoRosa </p>
                <img src={reactLogo} style={{width:"10%"}}/>
              </div>
            </div>    
            
            <div className="col-md-8 col-sm-6 offset-md-0">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:"15px"}}>
                <ul className="navbar-nav mr-auto ">
                    {/* <li className='menu'>
                        <Link to='/signin'>Sign in</Link>
                    </li> */}
                    <li className='menu'>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                    <li className='menu'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='menu'>
                        <Link to='/news'>News</Link>
                    </li>
                    <li className='menu'>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li className='menu'>
                        <Link to='/' onClick={() => props.postSignut()} >SignOut</Link>
                    </li>
                </ul>
                </div>
              </div>

              
          </nav>
        </div>
      </div>
      
       
    
    );
  };
};

export default Navigation;