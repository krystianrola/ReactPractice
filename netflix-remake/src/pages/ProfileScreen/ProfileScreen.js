import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { Nav } from '../../Nav';
import "./ProfileScreen.css"

function ProfileScreen() {

    const user = useSelector(selectUser);
    
  return (
    <div className='profilescreen'>
        <Nav/>
        <div className="profilescreen_body">
            <h1> Edit Profile </h1>
            <div className="profilescreen_info">
                <img 
                    className='profilescreen_avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar" 
                />
                <div className="profilescreen_details">
                    <h2> {user.email} </h2>
                    <button className="profilescreen_signout" onClick={() => auth.signOut()}>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;
