import React from  "react";
import DefaultLayout from "../layout/Default";

const UserShow = ({user}) => {
  return (
 <DefaultLayout title={user.name}>
    <h1>{user.name}</h1>
    <p>Email: {user.email}</p>
    <a href={"/users/${user._id}/edit"}>Edit</a>
  </DefaultLayout>
  );
};

export default Show