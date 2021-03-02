import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import './App.css';
import { LoginForm } from './Components/LoginForm';

export const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height='100vh'
            projectID='550afb2b-f5b4-4ab0-a9f6-a7e4f5b69270'
            userName='Matias'
            userSecret='123456'
            renderChatFeed={(chatProps) => <ChatFeed {...chatProps}/>}
        />
    )
}

export default App;
