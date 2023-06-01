import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const { login, error } = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: true
  })

  const { email, password, rememberMe } = form

  useEffect(() => {
    const email = localStorage.getItem('email')
    if (email) {
      setForm({
        ...form,
        email
      })
    }
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    rememberMe ? localStorage.setItem('email', email) : localStorage.removeItem('email')
    login(email, password)
  }

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
      { error && <div className="alert alert-danger" role="alert"> {error} </div> }
      <span className="login100-form-title mb-3">Chat - Login</span>

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
        <div className="col" onClick={() => setForm({ ...form, rememberMe: !rememberMe })}>
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            readOnly
          />
          <label className="label-checkbox100">Remember me</label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            New account?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button className="login100-form-btn">Login</button>
      </div>
    </form>
  )
}
