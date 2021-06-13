// import { useState, useEffect } from 'react';
// import { getSession } from 'next-auth/client';

import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  // Redirect away if NOT auth
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState();

  // use this approach if only using client-side validation
  // this logic has been commented out, because server-side logic was applied instead in the profile page.

  // useEffect(()=> {
  //   getSession().then(session => {
  //     if(!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false);
  //     }
  //   })
  // },[]);

  // if(isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  async function onChangePasswordHandler (passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={onChangePasswordHandler}/>
    </section>
  );
}

export default UserProfile;
