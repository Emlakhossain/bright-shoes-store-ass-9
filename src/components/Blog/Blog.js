import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='Blog-heading'>Welcome To ReacT Js BlogS:</h2>
            <div className='blog-container'>
                <div className='blog'>

                    <h3># How React Works?</h3>
                    <p>React is a very popular JavaScript library. With over 5.5 million weekly downloads, React is enjoying great popularity. But not a lot of React developers know how React works under the hood</p>
                    <p>But before we start, if you're a React developer, I have some exciting news for you! Once you complete this article, you'll get to develop something cool with React and win prizes on the way</p>
                </div>
                <div className='blog'>
                    <h3> # What is the deffirent props Vs state?</h3>
                    <p>8

                        Both state and props in react are used to control data into a component, generally props are set by parent and passed to child components and they are fixed throughout the component. For data that is going to change, we have to use state. And props are immutable while states are mutable, if you want to change props you can do from parent component and then pass it to child components.</p>
                </div>
                <div className='blog'>
                    <h3># How useState works?</h3>
                    <p>I think useState like hook. A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.</p>
                    <p>There are some special rules about where you can and can’t use Hooks within a component. We’ll learn them in Rules of Hooks.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;