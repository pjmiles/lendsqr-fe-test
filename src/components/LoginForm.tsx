import { Link } from 'react-router-dom'
import '../styles/LoginForm.scss'
import logo from '../assests/Union.png'
import signInPic from '../assests/pablo-sign-in 1.png'
import lendsqr from '../assests/lendsqr.png'

interface LoginProps {
    username: string
    passwor: string
}

const LoginForm = () => {
    return (
        <div className="login-form container">
            <div className="split">
                <div className="login-left">
                    <div className="left-logo">
                        <img src={logo} alt='lendsqr logo' className="logo" />
                        <img src={lendsqr} alt="lendsqr" className="lendsqr"/>
                    </div>
                    <div className="signup-image-container">
                        <img src={signInPic} alt="inner form picture" />
                    </div>
                </div>
            </div>

            <div className="split right">
                <div className="login-right centered">
                    <div className="form-group">
                    <div className="right-heading">
                        <h1>Welcome!</h1>
                        <p>Enter details to login</p>
                    </div>
                        <div className="form-control">
                            <label htmlFor="email" />
                            <input type="email" placeholder="Email" className="form-input" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" />
                            <input type="password" placeholder="Password" className="form-input" />
                        </div>
                        <div className="form-control link-container">
                            <Link to="/forget-password" className="link">Forgot Password?</Link>
                        </div>
                        <div className="button-container">
                            <button className="submit-btn">LOG IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm