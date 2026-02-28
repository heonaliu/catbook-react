import React, { useState } from "react";
import "../../utilities.css";
import "./Profile.css";
import CatHappiness from "../modules/CatHappiness";
// TODO Step 1b: Import the CatHappiness component

const Profile = () => {
  // TODO Step 1a: Initialize state of CatHappiness
  const [catHappiness, setCatHappiness] = useState(60);
  

  return (
    <div>
      <div className="Profile-avatarContainer">
        <div className="Profile-avatar" />
      </div>
      <h1 className="Profile-name u-textCenter">YOUR NAME HERE</h1>
      <hr className="Profile-line" />
      <div className="u-flex">
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">About Me</h4>
          <div id="profile-description">
            Extra Challenge: Modify catbook to show a personalized description here!
          </div>
        </div>
        <div className="Profile-subContainer u-textCenter"><h4 className="Profile-subTitle">Cat Happiness</h4>
         <CatHappiness catHappiness = {catHappiness}/></div>
         
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
          <div id="favorite-cat">corgi</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
