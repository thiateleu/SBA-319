import React from "react";
import DefaultLayout from '../layout/Default';

const UserNew = () => {

    return (
        <DefaultLayout title={'Create a New User'}>

            <form action="/users" method="POST">
                <label> Name: <input type="text" name="name" /></label>
                <label>Email: <input type="email" name="email" /></label>
                <label> Age: <input type="number" name="age" /></label>
                <button><input type="submit" value="Create User" /></button>

            </form>
        </DefaultLayout>
    );
};


export default UserNew;