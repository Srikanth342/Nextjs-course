import { useEffect, useState } from "react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import {  getSession } from "next-auth/client";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);
  // // Redirect away if NOT auth

  // useEffect(() => {
  //   getSession().then((session) => {
  //     setIsLoading(false);
  //     if(!session){
  //       window.location.href = "/auth"
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
