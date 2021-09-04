import { Avatar, Image, Button } from 'antd';

function Profile() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3" style={{ backgroundColor: "#FFEDDA", minHeight: "500px"}}>
          <Avatar
            size={80}
            // src={<Image src={} />}
            style={{margin: "auto"}}
          />
          
        </div>
      </div>
    </div>
  );
}



export default Profile;