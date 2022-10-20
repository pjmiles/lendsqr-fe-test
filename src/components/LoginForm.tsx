import { Link } from 'react-router-dom'
import { useReducer, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/LoginForm.scss'
import logo from '../assests/Union.png'
import signInPic from '../assests/pablo-sign-in 1.png'
import lendsqr from '../assests/lendsqr.png'

// state values
interface LoginProps {
    email: string
    password: string
    error: string
    isLoggedIn: boolean
    isLoading: boolean 
}

const initialState: LoginProps = {
    email: "",
    password: "",
    error: "",
    isLoggedIn: false,
    isLoading: false
}

// login action type
type LoginAction = 
    | { type: "login" | "error" | "success" }
    | { type: "field", fieldName: string, payload: string }

const loginReducer = (state: LoginProps, action: LoginAction): LoginProps => {
    // switch case for actions
    switch (action.type) {
        case "field": {
            return {
                ...state, [action.fieldName]: action.payload
            }
        }
        case "login": {
            return {
                ...state, error: "", isLoading: true
            }
        }
        case "success": {
            return {
                ...state, error: "", isLoading: false, isLoggedIn: true
            }
        }
        case "error": {
            return {
                ...state, 
                isLoading: false, 
                isLoggedIn: false, 
                email: "", 
                password: "", 
                error: "Invalid email or password!"
            }
        }

        default: 
            return state
    }
}


const LoginForm = () => {
    const [state, setState] = useReducer(loginReducer, initialState)
    const { email, password, isLoading, isLoggedIn, error } = state 
    const navigate = useNavigate()

    // to handle login details 
 
    // to handle submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setState({ type: "login" })
        try {
            const { data } = await axios.post("/login", { email, password }) // this axios is for api call to the endpoint
            localStorage.setItem("loginDetails", JSON.stringify(data))
            setState({ type: "success" })
            navigate("/dashboard", {replace: true}) 
        } catch (error) {
            setState({ type: "error" })
        }
    }

    return (
        <div className="login-form container">
            <div className="split">
                <div className="login-left">
                    <div className="left-logo">
                        <img src={logo} alt='lendsqr logo' className="logo" />
                        <img src={lendsqr} alt="lendsqr" className="lendsqr"/>
                    </div>
                    <div className="signup-image-container">
                        <img src={signInPic} alt="inner form" />
                    </div>
                </div>
            </div>

            <div className="split right">
                <form className="login-right centered" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <div className="right-heading">
                        <h1>Welcome!</h1>
                        <p>Enter details to login</p>
                    </div>
                    {error && <p className="error">{error}</p>}
                        <div className="form-control">
                            <label htmlFor="email" />
                            <input 
                            type="email" 
                            placeholder="Email" 
                            className="form-input"
                            value={email}
                            onChange={(e) =>
                                setState({
                                    type: "field",
                                    fieldName: "email",
                                    payload: e.currentTarget.value
                                }) 
                            } 
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" />
                            <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-input"
                            value={password}
                            onChange={(e) => {
                                setState({
                                    type: "field",
                                    fieldName: "password",
                                    payload: e.currentTarget.value
                                })
                            }} 
                            />
                        </div>
                        <div className="form-control link-container">
                            <Link to="/forget-password" className="link">Forgot Password?</Link>
                        </div>
                        <div className="button-container">
                            <button className="submit-btn" disabled={isLoading}>
                                {isLoading ? "Logging in..." : "LOG IN"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm