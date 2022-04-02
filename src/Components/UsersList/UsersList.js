import "./UsersList.css";
import User from "../User/User";
import Loader from "../Common/Loader";
import ModalView from "../Modal/ModalView";
import { useState } from "react";

function UsersList(props) {
  const {
    modalShow,
    showUsers,
    showUserDetail,
  } = useUserListHooks();

  return (
    <>
      {!props.allUsers ? (
        <Loader />
      ) : (
        <div className="all-users">
          <div className="users-list">{showUsers(props.allUsers)}</div>
        </div>
      )}
      <>{modalShow && showUserDetail()}</>
    </>
  );
}

// Separate business logic with custom hook
function useUserListHooks() {
  const [userClicked, setUserClicked] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [userID, setUserID] = useState(null);

  const handleClick = (user, show) => {
    setUserClicked(true);
    setModalShow(show);
    setUserID(user.id);
  };

  const showUsers = (allUsers) => {
    return allUsers.map((user) => {
      return (
        <User
          userDetailReq={handleClick}
          key={user.id}
          userDetail={user}
          userClicked={userClicked}
        />
      );
    });
  };

  const handleModalShow = (show) => {
    setModalShow(show);
  };

  const showUserDetail = () => {
    return (
      <ModalView show={modalShow} onHide={handleModalShow} userID={userID} />
    );
  };

  return {
    showUsers,
    handleModalShow,
    showUserDetail,
    handleClick,
    userClicked,
    modalShow,
    userID,
  };
}
export default UsersList;
