import "./User.css";

function User(props) {
  // console.log(props.userDetail);
  const userDetail = props.userDetail;
  const {title, picture, firstName, lastName} = userDetail
  const fullName = `${title.toUpperCase()} ${firstName} ${lastName}`
  return (
    <div  className="user-detail">
        <div className="image-box">
            <img src = {picture} alt="profile" />
        </div>
        <div className="name-box">
            <h5>{fullName}</h5>
        </div>
    </div>
  )
}
export default User;
