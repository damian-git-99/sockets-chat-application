import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Searchbox = () => {
  const { logout, auth } = useContext(AuthContext)

  const handleExit = () => {
    logout()
  }

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{auth?.username}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button onClick={handleExit} className="btn text-danger">Exit</button>
        </div>
      </div>
    </div>
  )
}
