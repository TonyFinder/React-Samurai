import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';
import {profilePagePropsType} from '../../../Redux/State';

type MyPostsProps = {
    posts: profilePagePropsType
    addPost: (message: string) => void
}

const MyPosts = (props: MyPostsProps) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value
        if (text) props.addPost(text)
    }

    return <div  className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={p.posts}>
            {props.posts.posts.map(post => <Post message={post.message} likesNumber={post.likesNumber}/>)}
        </div>
    </div>
}

export default MyPosts;