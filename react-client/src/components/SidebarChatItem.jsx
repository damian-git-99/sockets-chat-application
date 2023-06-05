/* eslint-disable react/prop-types */
export const SidebarChatItem = ({ user = {} }) => {
  return (
    <div className="chat_list">
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.username}</h5>
          { user.online
            ? <span className="text-success">Online</span>
            : <span className="text-danger">Offline</span> }
        </div>
      </div>
    </div>
  )
}
