import React from "react";
import { Home, NotebookText, Heart, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter()
  return (
    <div className="bg-white shadow-xl flex justify-between p-5 px-10 h-16 items-center fixed bottom-0 w-[420px]">
        <div className="flex flex-col gap-1 hover:cursor-pointer text-xs items-center" onClick={() => router.push('/home')}>
            <Home />
            <p className="">Home</p>
        </div>
        <div className="flex flex-col gap-1 hover:cursor-pointer text-xs items-center" onClick={() => router.push('/funding')}>
            <NotebookText />
            <p>Daftar Bantuan</p>
        </div>
        <div className="flex flex-col gap-1 hover:cursor-pointer text-xs items-center" onClick={() => router.push('/funding/create')}>
            <Heart />
            <p>Buat Bantuan</p>
        </div>
        <div className="flex flex-col gap-1 hover:cursor-pointer text-xs items-center" onClick={() => router.push('/notification')}>
            <Bell />
            <p>Notifikasi</p>
        </div>
    </div>
  )
}

export default Navbar;
