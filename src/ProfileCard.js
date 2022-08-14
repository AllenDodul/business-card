import React from 'react';
import style from './style';

function ProfileCard(){
  return(
    <div className="card">
      <div className="image-box">
        <img 
          className="profile-image"
          src="https://i.ibb.co/4VHRd7b/images-66.jpg" 
          alt="images-66"
        />
      </div>
      <div className="card-info">
        <div className="name-info">
          <div>
            <h3>Allen Henson</h3>
            <p>Front-End Engineer</p>
          </div>
        </div>
        <div className="follow-box">
          <button>Follow</button>
          <button className="linkdin">Linkdin</button>
        </div>
        <div className="about">
          <h4>About</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard;