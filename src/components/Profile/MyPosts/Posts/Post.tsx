import React from 'react';
import p from './Post.module.css';

const Post = () => {
    return (
        <div className={p.item}>
            <img
                src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/13/Pictures/_67aa6b5c-94d7-11ea-9070-932bbf5d90a5.jpg"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;