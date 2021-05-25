import React, { useEffect, useState } from 'react'
import '../css-styling/Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOptions from './InputOptions'
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@material-ui/icons'
import Post from './Post'
import { db } from '../firebase/firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )
            ))
        })
    },[]); 
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photo: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions title="Photo" Icon={Image} color="#70B5F9"/>
                    <InputOptions title="Video" Icon={Subscriptions} color="#E7A33E"/>
                    <InputOptions title="Event" Icon={EventNote} color="#C0CBCD"/>
                    <InputOptions title="Write article" Icon={CalendarViewDay} color="#7FC15E"/>
                </div>
            </div>

            {/**Posts */}
            <FlipMove>
                {posts.map(({id,data: { name, description, message, photoUrl}}) => {
                    return (
                        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                    )
                })}
            </FlipMove>
        </div>
    )
}

export default Feed
