import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './ProfilePage.css';

import useJToken from '../utils/useJToken';

import '../index.css';
import './ProfilePage.css';

function UserBanner(userName, firstName, lastName) {
    return (
        <>
            <h2>Welcome {userName}</h2>
            <h3>aka {firstName} {lastName}</h3>
            <hr/>
        </>
    );
}

/**
 * @description Stateful page component for user profile page UI. 
 * @param {{usedJTokenHook: useJToken}} param0 
 */
function ProfilePage({usedJTokenHook}) {
    /* State */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]= useState('');
    const [userName, setUserName] = useState('');
    const {token, setToken} = usedJTokenHook();

    /* Event Handlers */

    /**
     * @description Loads some basic user info (real name) for this private profile page. See SDD 5.6 for app API call notes.
     * @param {{token: string}} credentials 
     * @returns {{payload: number, data: *} | null}
     */
    const loadUserInfo = async (credentials) => {
        return fetch('http://127.0.0.1:5000/api/users/action', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({action: 32, args: credentials})
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error(`eurekaeats [API Error]: ${error}`);
            return null;
        });
    };

    // Use useEffect to update user info...
    useEffect(() => {
        const doStatefulDataLoad = async () => {
            const replyData = await loadUserInfo({token});

            if (!replyData) {
                console.error(`eurekaeats [API Error]: Fetch failed.`);
            } else if (replyData.payload === 4) {
                console.error(`eurekaeats [API Error]: No valid data found.`);
            } else if (replyData.payload === 2 && replyData.data !== null) {
                console.log(`eurekaeats [API Debug]: ${replyData}`);
                setUserName(replyData.data.username);
                setFirstName(replyData.data.first_name);
                setLastName(replyData.data.last_name);
            } else {
                console.error(`eurekaeats [API Error]: Invalid payload.`);
            }
        };
        
        doStatefulDataLoad();
    }, [token]);

    // Check for unauthenticated guests: redirect them to login!
    if (token === 'guest' || !userName || !firstName || !lastName) {
        return (<Navigate to='/login'/>);
    }

    return (
        <>
            <header>
                <nav>
                    <Link to='/'>Landing</Link>
                    {/* TODO: implement a place to browser dining places? */}
                    <Link to='#'>Browse</Link>
                </nav>
                <button onClick={() => setToken(null)}>Logout</button>
            </header>
            <main>
                <section className='profile-section'>
                    <UserBanner userName={userName} firstName={firstName} lastName={lastName}/>
                </section>
                <section className='profile-section'>
                    <h3>About Me</h3>
                    <p>Descriptions coming soon!</p>
                </section>
            </main>
        </>
    )
}

export default ProfilePage;
