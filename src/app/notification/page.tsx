'use client'
import Navbar from "@/components/navbar";
import { Bell, Clock10 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";

function NotificationPage() {
    const [notifications, setNotification] = useState<any[]>([]); // Initialize as an empty array

    useEffect(() => {
        const idUser = Cookies.get('userId');

        const fetchUser = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notification/list?user=${idUser}`, { withCredentials: true });
                console.log(response.data);
                setNotification(response.data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        fetchUser();
    }, []);
    
    return (
        <div>
            <Navbar />
            <div className="flex flex-col p-10 text-black gap-3">
                <h1 className="text-xl font-bold mb-5">
                    Notifikasi
                </h1>
                {notifications.length === 0 ? (
                    <p>Loading notifications...</p>
                ) : (
                    notifications.map((notification: any) => (
                        <div key={notification.id} className="bg-gray p-5 items-center rounded-xl flex gap-3">
                            <Bell className="text-rose w-1/4" size={20} />
                            <div className="flex flex-col gap-5 text-xs">
                                <p className="text-secondary">{notification.message}</p>
                                <div className="flex gap-2 items-center text-secondary text-[10px]">
                                    <Clock10 size={14} />
                                    3 hari yang lalu
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default NotificationPage;
