import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const RegisterPage = () => {
  const { register, error } = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  })

  const { email, password, username } = form

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    register(username, email, password)
  }

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
      { error && <div className="alert alert-danger" role="alert"> {error} </div> }
      <span className="login100-form-title mb-3">Chat - Register</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Do you already have an account?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button className="login100-form-btn">Create Account</button>
      </div>
    </form>
  )
}
