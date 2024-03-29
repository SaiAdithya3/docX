import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const endpoint = 'http://localhost:3000/Gpt';

    const sendMessage = async () => {
        if (!inputText.trim()) return;
    
        // Add user message to the chat
        setMessages(prevMessages => [...prevMessages, { text: inputText, sender: 'user' }]);
        setInputText('');
    
        try {
            const response = await axios.post(endpoint, { diffinput: inputText });
    
            // Extract relevant information from response.data and add them to messages
            const { instructions, suggestion } = response.data;
            let botResponse = '';
    
            if (instructions && suggestion) {
                botResponse = `Instructions: ${instructions}\n\nSuggestion:\n${suggestion}`;
            } else if (instructions) {
                botResponse = `Instructions: ${instructions}`;
            } else if (suggestion) {
                botResponse = `Suggestion:\n${suggestion}`;
            }
    
            setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="w-full flex">
            <div className="top-0 left-0 w-[18%]">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col items-center p-8">
                <h1 className="text-2xl font-semibold p-4">Chat with AI</h1>
                <div className="w-full h-80 border border-gray-300 rounded-lg overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            <span className={`inline-block px-2 py-1 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                {message.text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-4 flex items-center">
                    <input
                        type="text"
                        className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 mr-2"
                        placeholder="Type your message..."
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="bg-zinc-300 text-black px-4 py-2 rounded-lg"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
