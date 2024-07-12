'use client'
import Navbar from "@/components/navbar";
import { Bell, Clock10 } from "lucide-react";
import React from "react";

function NotificationPage() {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col p-10 text-black gap-3">
            <h1 className="text-xl font-bold mb-5">
                Notifikasi
            </h1>
            <div className="bg-gray p-5 items-center rounded-xl flex gap-3">
                <Bell className="text-rose w-1/4" size={20}/>
                <div className="flex flex-col gap-5 text-xs">
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam?</p>
                    <div className="flex gap-2 items-center text-secondary text-[10px]">
                        <Clock10 size={14}/>
                        3 hari yang lalu
                    </div>
                </div>
            </div>
            <div className="bg-gray p-5 items-center rounded-xl flex gap-3">
                <Bell className="text-rose w-1/4" size={20}/>
                <div className="flex flex-col gap-5 text-xs">
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam?</p>
                    <div className="flex gap-2 items-center text-secondary text-[10px]">
                        <Clock10 size={14}/>
                        3 hari yang lalu
                    </div>
                </div>
            </div>
            <div className="bg-gray p-5 items-center rounded-xl flex gap-3">
                <Bell className="text-rose w-1/4" size={20}/>
                <div className="flex flex-col gap-5 text-xs">
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam?</p>
                    <div className="flex gap-2 items-center text-secondary text-[10px]">
                        <Clock10 size={14}/>
                        3 hari yang lalu
                    </div>
                </div>
            </div>
            <div className="bg-gray p-5 items-center rounded-xl flex gap-3">
                <Bell className="text-rose w-1/4" size={20}/>
                <div className="flex flex-col gap-5 text-xs">
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam?</p>
                    <div className="flex gap-2 items-center text-secondary text-[10px]">
                        <Clock10 size={14}/>
                        3 hari yang lalu
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationPage;
