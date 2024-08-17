import React from "react";
import DefaultLayout from  "../layout/Default";

const UserEdit = ({user}) => {
    return (
        <DefaultLayout title={'Edit ${user.name}'}>
        <form action={"/users/${user._id}?_method=PUT"} method="POST">
       <label>Name: <input type="text" name="name" defaultValue={user.name} /></label> 
       <label> Email: <input type="text" name="email" defaultValue={user.email} /></label> 
       <button><input type="submit" value="Submit Changes" /></button>

    </form>
</DefaultLayout>
);
};


export default UserEdit;
