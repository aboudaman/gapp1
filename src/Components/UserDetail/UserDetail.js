import {Component} from 'react'

class UserDetail extends Component {
  constructor(props) {
    super();
  }

  render() {
    //   console.log(this.props)
      const {firstName, lastName, picture, location} = this.props.userDetail
    //   console.log(location)
    return (
      <>
        <h4>
          {firstName} {lastName}
        </h4>
        <div>
          <img src={picture} alt="User" width="150px" />
        </div>

        <h6>Address</h6>
        <p>City: {location.city}</p>
        <p>Country: {location.country}</p>
        <p>State: {location.state}</p>
        <p>Street: {location.street}</p>
        <p>Timezone: {location.timezone}</p>
      </>
    );
  }
}

export default UserDetail;
