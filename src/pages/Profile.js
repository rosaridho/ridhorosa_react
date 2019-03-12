import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = props => {
    const is_Login = JSON.parse(localStorage.getItem("is_Login"));
    const email = localStorage.getItem("email");
    const full_name = localStorage.getItem('full_name');

    // karena trafic nya penuh tidak bisa sign in

    console.log('is_Login', is_Login);

    if (is_Login == null){
        return <Redirect to = {{pathname : '/signin'}} />;
    } else {
        return (
            <section className='content'>
            <h1 style={{textAlign:"center"}}>Profile</h1>
            <p>
                <label>Email:</label>
                {email}    
            </p>
            <p>
                <label>Full Name:</label>
                {full_name}    
            </p>
            </section>
        );
    }
};

export default Profile;