import React, { useEffect, useState } from "react";
import { useUserAuth } from "../Context/Userauthcontext";
const useLoggedinuser = () => {
  const { user } = useUserAuth();
  const email = user?.email;
  const [loggedinuser, setloggedinuser] = useState({});

  useEffect(() => {
    fetch(
      `https://twiller-twitter-clone-qbey.onrender.com/loggedinuser?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setloggedinuser(data);
      });
  }, [email, loggedinuser]);
  return [loggedinuser, setloggedinuser];
};

export default useLoggedinuser;
