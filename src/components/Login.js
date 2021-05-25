import React, { useState } from 'react'
import '../css-styling/Login.css'
import { auth } from '../firebase/firebase'
import {login} from '../features/userSlice'
import { useDispatch } from 'react-redux';
function Login() {

    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error));
    }

    const register = () => {
        if(!name){
            return alert('Please enter your name');
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch((error) => alert(error));
    }
    return (
        <div className="login">
            <img src="https://techcrunch.com/wp-content/uploads/2012/11/linkedin-logo.png?w=1390&crop=1" alt="" />  

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile Pic url" type="text"/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button onClick={loginToApp}>Sign In</button>
            </form>  
            <p>Not a member?{"  "} <span onClick={register} className="login__register">Register now</span></p>
        </div>
    )
}

export default Login
