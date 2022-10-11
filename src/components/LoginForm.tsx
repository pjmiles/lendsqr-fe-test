import { Link } from 'react-router-dom'
import logo from '../assests/Union.png'
import signInPic from '../assests/pablo-sign-in 1.png'

interface LoginProps {
    username: string
    passwor: string
}

const LoginForm = () => {
    return (
        <div>
            <div className="split">
                <div className="login-left">
                    <div className="left-logo">
                        <img src={logo} alt='lendsqr logo' />
                    </div>
                    <div>
                        <img src={signInPic} alt="inner form picture" />
                    </div>
                </div>

                <div className="login-right">
                    <div className="right-heading">
                        <h1>Welcome!</h1>
                        <p>Enter details to login</p>
                    </div>
                    <div className="form-group">
                        <div className="form-control">
                            <label htmlFor="email" />
                            <input type="email" placeholder="Email" className="form-input" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" />
                            <input type="email" placeholder="Password" className="form-input" />
                        </div>
                        <div className="form-control">
                            <Link to="/register" className="link">Forgot Password?</Link>
                        </div>
                        <div className="button-container">
                            <button>LOG IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm