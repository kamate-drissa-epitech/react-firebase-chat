import "./userInfo.css"

const UserInfo = () => {
  return (
    <div className="userInfo">
        <div className="user">
            <img src="./avatar.png" alt="user" />
            <h2>John Doe</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="more" />
            <img src="./video.png" alt="more" />
            <img src="./edit.png" alt="more" />
        </div>
    </div>
  )
}

export default UserInfo