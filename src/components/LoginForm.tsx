

interface LoginProps {
    username: string
    passwor: string
}

const LoginForm = () => {
  return (
    <div>
        <div className="split">
            <div className="login-left">
                <div className="left-heading">
                <h1>Welcome!</h1>
                <p>Enter details to login</p>
                </div>
                <div className="form-group">
                    <div className="form-control">
                    <label htmlFor="email"/>
                    <input type="email" placeholder="Email" className="form-input"/>
                    </div>
                    <div className="form-control">
                    <label htmlFor="password"/>
                    <input type="email" placeholder="Password" className="form-input"/>
                    </div>
                    <div className="form-control">
                        
                    </div>
                    <div className="button-container">
                        <button>LOG IN</button>
                    </div>
                </div>
            </div>


            <div className="login-right">

            </div>
        </div>
    </div>
  )
}

export default LoginForm