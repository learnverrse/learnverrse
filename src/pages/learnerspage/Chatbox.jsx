import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaPhone, FaPlus } from 'react-icons/fa6';
import { MdMoreVert } from 'react-icons/md';
import { IoSend  } from 'react-icons/io5';
import { IoMdArrowBack } from "react-icons/io";
import { set } from 'date-fns';
import { BsJustify } from 'react-icons/bs';
import { BackgroundLogo } from '@/components/details';

const Chatbox = () => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
    const [showMobileChat, setShowMobileChat] = useState(false);


  const users = [
    {
      id: 1,
      name: 'Titilope',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format',
      lastMessage: 'Hello, how may I help y...',
      time: '11:30',
      unread: false,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format',
      lastMessage: 'Thanks for the help with...',
      time: '10:45',
      unread: true,
    },
    {
      id: 3,
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format',
      lastMessage: 'The assignment is due...',
      time: '09:32',
      unread: true,
    },
    {
      id: 4,
      name: 'Emma Williams',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face&auto=format',
      lastMessage: 'Can we schedule a study...',
      time: '08:15',
      unread: true,
    },
    {
      id: 5,
      name: 'David Rodriguez',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format',
      lastMessage: 'Great explanation! I und...',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face&auto=format',
      lastMessage: 'Start new conve...',
      time: 'Yesterday',
      unread: false,
    },
  ];

  // Demo messages for selected chat
  const messages = {
    1: [
      {
        id: 1,
        text: 'Hello sir, I have a question',
        sender: 'user',
        time: '10:43',
      },
      {
        id: 2,
        text: 'Hello, how may I help you',
        sender: 'other',
        time: '11:30',
      },
    ],
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMessage = (e) => {
    if (newMessage.trim() && selectedChat) {
      console.log('Sending message:', newMessage);

      setNewMessage('');
    }
  };

  const handleChatSelect = (user) => {
    setSelectedChat(user);
    setShowMobileChat(true);
  };

  const handleBackToSidebar = () => {
    setShowMobileChat(false);
    setSelectedChat(null);
  };

  return (
    <div className="mx-auto flex h-[calc(100vh-80px)] max-w-6xl bg-gray-200 shadow-2xl">
      {/* Sidebar */}

      <div className={`h-full md:w-1/3 border-r border-gray-300 bg-white ${showMobileChat ? 'hidden md:block' : 'w-full md:w-1/3'}`}>
        <div className="p-4">
          <h2 className="mb-4 text-3xl font-semibold">Chats</h2>

          <div className="relative">
            <CiSearch className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="border-primary-300 bg-primary-50 focus:ring-primary-500 w-full rounded-full border py-2 pr-4 pl-10 focus:bg-white focus:ring-2 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Chat List */}

        <div className="mx-2 flex-col overflow-y-auto">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => handleChatSelect(user)}
              className={`flex cursor-pointer items-center border-b border-gray-100 p-4 transition-colors hover:rounded-md hover:bg-purple-300 ${
                selectedChat?.id === user.id ? 'rounded-md bg-purple-300' : ''
              }`}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="mr-3 h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="truncate font-bold">{user.name}</h3>
                <p className="truncate text-xs text-gray-500">
                  {user.lastMessage}
                </p>
              </div>
              <p className="text-primary-600 truncate text-sm font-bold">
                {user.time}
              </p>
              {user.unread && (
                <div className="ml-2 h-2 w-2 rounded-full bg-purple-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat */}
    <div className={`flex flex-1 flex-col ${ showMobileChat ? 'w-full md:flex' : 'hidden md:flex'}`}>
        {selectedChat ? (
          <>
            {/* chat header */}

            <div className="flex items-center justify-between bg-gray-200 p-4">
              <div className="flex items-center">
                <button
                  onClick={handleBackToSidebar}
                  className="mr-3 cursor-pointer text-gray-500 hover:text-gray-700 md:hidden"
                >
                  <IoMdArrowBack  className="h-6 w-6" />
                </button>
                <img
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
                <h2 className="font-semibold text-black">
                  {selectedChat.name}
                </h2>
              </div>
              <div className="flex items-center space-x-3">
                <button className="cursor-pointer text-gray-500 hover:text-gray-700">
                  <FaPhone className="h-5 w-5" />
                </button>
                <button className="cursor-pointer text-gray-500 hover:text-gray-700">
                  <CiSearch className="h-5 w-5" />
                </button>
                <button className="cursor-pointer text-gray-500 hover:text-gray-700">
                  <MdMoreVert className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}

            <div className="bg-white flex-1 overflow-y-auto p-4">
              <div className="mb-4 text-center">
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-800 shadow-sm">
                  Today
                </span>
              </div>

              {messages[selectedChat.id]?.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`relative max-w-xs rounded-2xl px-4 py-2 lg:max-w-md ${message.sender === 'user' ? 'bg-primary-300 rounded-br-xs text-black' : 'rounded-bl-xs bg-gray-300 text-black shadow-sm'}`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="mt-2 text-xs text-black">
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-gray-80 border-t bg-gray-300">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  className="hover:text-primary-500 p-2 text-gray-600 transition-colors"
                >
                  <FaPlus className="h-5 w-5" />
                </button>
                <div className="relative flex-1 ">
                  <input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleMessage(e);
                      }
                    }}

                     className="border border-gray-500 w-full rounded-full py-2 px-4 my-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button type='button' className={`mr-4 p-2 rounded-full ${newMessage.trim()
                      ? 'bg-purple-500 text-white hover:bg-purple-600'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`} onClick={handleMessage} disabled={!newMessage.trim()}>
                    <IoSend className='w-5 h-5'/>
                </button>
              </div>
            </div>
          </>
        ) : (
            
            <div className='flex-1 flex  flex-col items-center justify-center bg-gray-50'>
            <img src={BackgroundLogo} alt="Background Logo" className='w-1/2 object-cover' />
              <h2 className='text-purple-300 text-4xl mt-4 font-bold'>Messages</h2>
            </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
