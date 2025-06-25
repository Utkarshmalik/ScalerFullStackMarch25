import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [userData, setUserData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchUserDetail = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/users/${params.userId}`
      );
      const userData = await response.json();
      setUserData(userData);
    };

    fetchUserDetail();
  }, []);

  if (!userData) return <h1>Loading...</h1>;

  console.log("userData", userData);
  return (
    <h1>
      {userData.name.firstname} {userData.name.lastname}
    </h1>
  );
}

export default User;
