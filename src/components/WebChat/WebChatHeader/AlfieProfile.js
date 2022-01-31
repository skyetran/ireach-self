import classes from "./WebChatAlfieProfile.module.css"

const AlfieProfile = () => {
  return <div
  className={`position-relative ${classes["profile-frame"]}`}
>
  <img
    src={require("../../../assets/AlfieProfilePicture.jpg")}
    className="img-fluid rounded-circle"
    alt=""
  />
</div>
}

export default AlfieProfile;