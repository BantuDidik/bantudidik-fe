// components/Chat.tsx

"use client";

import React, { useEffect, useState, useRef } from 'react';
import { collection, onSnapshot, QuerySnapshot, DocumentData, addDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/config/db';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idUser = Cookies.get('userId');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  },[])

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${idUser}`, {
          withCredentials: true,
        });
        setName(response.data.name);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    const fetchMessages = () => {
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
            createdAt: data.createdAt.toDate(),
          });
        });

        setMessages(messagesArray);
        setLoading(false);
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      });

      return unsubscribe;
    };

    fetchUsername();
    const unsubscribe = fetchMessages();
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      try {
        await addDoc(collection(db, 'forum'), {
          message: newMessage,
          name: name,
          createdAt: new Date(),
        });
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className='flex items-center h-full w-full'>
      <div className="flex flex-col w-full mx-auto h-full p-6 bg-white rounded-lg shadow-lg">
        <Link href={'/home'} className="text-carmine w-fit">
          <ArrowLeft />
        </Link>
        <h1 className='text-black font-bold text-[24px] text-center'>BantuDidik Forum</h1>
        <div className='h-full flex flex-col justify-between '>
            <div className="flex flex-col h-[78vh] overflow-y-scroll mb-4 p-4 bg-gray-100 rounded-lg">
            {loading ? (
                <div>Loading...</div>
            ) : (
                messages.map((message) => {
                    
                    return (
                        <>
                        <div
                            key={message.id}
                            className={`my-1 p-3 rounded-lg max-w-xs ${
                            message.name === name ? 'bg-[#E23C64] text-white self-end' : 'bg-[#F5F6FB] text-black self-start'
                            }`}
                        >
                            <strong>{message.name}:</strong> {message.message}
                        </div>

                        {(message.message == 'http') && 
                            <div>
                                //TODO
                            </div>
                        }
                        </>
                    )
                })
            )}
            <div ref={bottomRef} className='mt-10'></div>
            </div>
            <form className="flex flex-col space-y-2" onSubmit={handleSendMessage}>
            <input
                className="p-2 border border-gray-300 rounded focus:outline-none text-black"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
            />
            <button type="submit" className="p-2 bg-[#E23C64] text-white rounded hover:bg-[#d32b56]">
                Send
            </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
