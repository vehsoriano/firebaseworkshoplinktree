
import { useState, useEffect } from 'react';
import { Avatar, Image, Button, Input } from 'antd';
import { EditOutlined, LogoutOutlined, CheckCircleTwoTone, CodeSandboxCircleFilled } from '@ant-design/icons'
import 'antd/dist/antd.css'

import AddLinkCard from '../components/AddLinkCard';
import EditLinkCard from '../components/EditLinkCard';
import firebase from '../firebase';
import profile from '../images/profile.jpg'

function Home() {

    const username = 'veh'
    const [links, setLinks] = useState([]);
    const [showCard, setShowCard] = useState(false);
    
    const linksRef = firebase.database().ref('links');

    const createNewCard = () => setShowCard(true);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-3" style={{ backgroundColor: "#FFEDDA", minHeight: "600px"}}>
                    <div className="row">
                        <div className="col-md-3">
                            <Avatar
                                size={80}
                                src={<Image src={profile} />}
                            />
                        </div>
                        <div className="col-md-9 mt-3">
                            <span className="mr-1">Username: {username}</span>
                            <br/>
                            <LogoutOutlined className="btn btn-danger float-right"/>

                        </div>
                    </div>
                    <Button type="primary" block shape="round" className="mt-3" onClick={createNewCard}>
                        Add New Link
                    </Button>  
                    {showCard  && <AddLinkCard  linksRef={linksRef} username={username}/>}              
                </div>
            </div>
        </div>
    );
}



export default Home;