import React from 'react';

const Blog = () => {
    return (
        <div className='text-4xl font-semibold text-center bg-green-200 py-32 px-10 min-h-screen w-2/3 mx-auto '>
            <h1 className='mt-5'>1.Difference between authorization and authentication</h1>
            <p className='text-2xl font '>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
            <h1 className='mt-5'>2.Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className='text-2xl font '>
Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
            <h1 className='mt-5'>3.What other services does firebase provide other than authentication</h1>
            <p className='text-2xl font '>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
        </div>
    );
};

export default Blog;