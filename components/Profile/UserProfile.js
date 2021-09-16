// import { getSession } from 'next-auth/client';
// import { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

function UserProfile() {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getSession().then((session) => {
    //         if (!session) {
    //             window.location.href = '/auth';
    //         } else {
    //             setIsLoading(false);
    //         }
    //     });
    // }, []);

    // if (isLoading) {
    //     return <p className={classes.profile}>Loading...</p>;
    // }

    const changePasswordHandler = async (passwordData) => {
        const response = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm onChangePassword={changePasswordHandler} />
        </section>
    );
}

export default UserProfile;
