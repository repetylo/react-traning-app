import React from 'react';

import './user-carg.css'

interface IName {
  firstName: string,
  lastName: string,
}

interface IContacts {
  username: string,
  site: string
}

interface ILocation {
  city: string,
  country: string,
  coverUrl: string
}

interface IActivity {
  postsCount: number,
  followersCount: number,
  followingCount: number
}

interface IUser {
  id: number,
  name: IName,
  avatarUrl: string,
  contacts: IContacts,
  job: string,
  location: ILocation,
  activity: IActivity,
  message: string,
  skills: string[]  
}

type Props = {
    user: IUser;
};


export const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <div className="userCardWrapper">
          <img className="userCardCover" src={user.location.coverUrl}/>
          <div className="userCardInfo">
            <img className="userCardAvatar" src={user.avatarUrl}/>
            <div className="userCardName">
              {user.name.firstName} {user.name.lastName}
            </div>
            <div className="userCardContacts">
              <span className="userCardUsername">
                @{user.contacts.username}
              </span> 
              <span className="userCardSeparator">|</span> 
              <span className="userCardSite">
                {user.contacts.site}
              </span>
            </div>
            <div className="userCardJob">
              {user.job}
            </div>
            <div className="userCardLocation">
              {user.location.city}, {user.location.country}
            </div>

            <div className="userCardActivity">
              <div className="activityItem">
                <div className="activityCount">
                  {user.activity.postsCount}  
                </div>
                <div className="activityName">
                  Posts
                </div>
              </div>
              <div className="activityItem">
                <div className="activityCount">
                  {user.activity.followersCount}  
                </div>
                <div className="activityName">
                  Followers
                </div>
              </div>
              <div className="activityItem">
                <div className="activityCount">
                  {user.activity.followingCount}  
                </div>
                <div className="activityName">
                  Following
                </div>
              </div>
            </div>
            <div className="userCardMessage">
              <p>
              {user.message}
              </p>
            </div>
            <div className="userCardButtons">
              <button type="button"className="Follow" style={{ backgroundImage:`url('./users/follow.png')` }}>Follow</button>
              <button type="button"className="Message" style={{ backgroundImage:`url('./users/mail.png')` }}>Message</button>
            </div>

            <div className="userCardSkills">
              Skills
              <p>
                {user.skills.map((skill) => <span>&#x25cf; {skill} </span>)}
              </p>
            </div>


          </div>
        </div>
      );
}

UserCard.displayName = 'SsUserCard';
