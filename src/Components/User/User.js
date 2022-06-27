import "./User.css";

function User(props) {
  // console.log(props.userDetail);
  // console.log('handleclick ==> ', props.userDetailReq);
  const userDetail = props.userDetail;
  const {picture, firstName, lastName} = userDetail
  const fullName = `${firstName} ${lastName}`
  return (
    <div  className="user-detail">
        <div onClick={() => props.userDetailReq(userDetail, true)} className="image-box">
            <img src = {picture} alt="profile" width='72px' />
        </div>
        <div className="name-box">
            <h5>{fullName}</h5>
        </div>

    </div>
  )
}
export default User;
