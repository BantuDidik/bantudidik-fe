// components/Chat.tsx

"use client";

import React, { useEffect, useState, useRef } from 'react';
import { collection, onSnapshot, QuerySnapshot, DocumentData, addDoc, query, orderBy, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/db';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const bottomRef = useRef<HTMLDivElement>(null)
  const name = Cookies.get('userName')

  useEffect(() => {
        
        const collectionRef = collection(db, 'forum');
        const q = query(collectionRef, orderBy('createdAt', 'asc'));
        const unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot<DocumentData>) => {
        const messagesArray: Message[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            messagesArray.push({
            id: doc.id,
            name: data.name,
            message: data.message,
            createdAt: data.createdAt.toDate()
            });
        });
        setMessages(messagesArray);
        bottomRef.current!.scrollIntoView({ behavior: "smooth" })
        });

        return () => unsubscribe();
    }, []);

    const handleSendMessage = async (e : any) => {
        e.preventDefault()
        if (newMessage.trim() !== '') {
          await addDoc(collection(db, 'forum'), {
            message: newMessage,
            name: name,
            createdAt: new Date()
          });
          setNewMessage('');
        }
      };

  return (
    <div className='flex items-center h-full w-full'>
        <div className="w-full mx-auto h-full p-6 bg-white rounded-lg shadow-lg">
        <Link href={'/home'} className="text-carmine w-fit">
            <ArrowLeft />
        </Link>
        <h1 className='text-black font-bold text-[24px] text-center'>BantuDidik Forum</h1>
        <div className="flex flex-col h-[70vh] overflow-y-scroll mb-4 p-4 bg-gray-100 rounded-lg">
            {messages.map((message) => (
            <div key={message.id} className={`mb-2 p-3 rounded-lg max-w-xs ${message.name === name ? 'bg-[#E23C64] text-white self-end' : 'bg-white text-black self-start'}`}>
                <strong>{message.name}:</strong> {message.message}
            </div>
            ))}
            <div ref={bottomRef} className='mt-10'></div>
        </div>
            <form className="flex flex-col space-y-2">
                {/* <input
                className="p-2 border border-gray-300 rounded focus:outline-none text-black"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                /> */}
                <input
                className="p-2 border border-gray-300 rounded focus:outline-none text-black"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                />
                <button type= "submit" className="p-2 bg-[#E23C64] text-white rounded hover:bg-[#d32b56]" onClick={(e) => handleSendMessage(e)}>
                Send
                </button>
            </form>
        </div>
    </div>
  );
};

export default Chat;
