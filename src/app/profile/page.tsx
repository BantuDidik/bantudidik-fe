'use client'
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Modal } from "@/components/modal";
import { ArrowLeft, Calendar, CircleDollarSign, Clock10, Eye, LogOut, MapPinIcon, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "@/components/navbar";
import axios from "axios";

function Profile() {
    const router = useRouter()
    const [isInputOpen, setIsInputOpen] = useState(false)
    const [user, setUser] = useState<any>(null)

    const handleAccept = () => {
        router.push(`/funding/3/applicants/4/confirmation`)
    }

    const handleLogout = () => {
        Cookies.remove('access_token')
        Cookies.remove('userId')
        Cookies.remove('userName')
        router.push('/login')
    }

    useEffect(() => {
        const token = Cookies.get('access_token')
        const idUser = Cookies.get('userId')

        const fetchUser = async() => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${idUser}`, { withCredentials: true });
            console.log(response.data)
            setUser(response.data)
        }

        fetchUser()

    }, [])

  return (
    <main className="relative flex flex-col items-center overflow-hidden h-full">
        <Navbar />
      <div className="bg-carmine justify-center items-center gap-2 w-full p-10 rounded-b-[15%] flex flex-col">
        <div className="w-full flex justify-end">
            <button onClick={handleLogout}><LogOut /></button>
        </div>
        <Image
        src={'/profile.svg'}
        alt="Illustration"
        width={0}
        height={0}
        className="w-1/4"
         />
         <div className="flex flex-col items-center text-center gap-2">

            { user === null ? '' :
                <>    
                    <h1 className="text-lg text-white font-semibold">{user.name}</h1>
                    <p className="flex gap-1 w-full text-xs"><MapPinIcon size={16}/>{user.location}</p>
                    <Chip className="bg-sunglow text-black">{user.occupation}</Chip>
                </>
            }
         </div>
      </div>
      <div className="p-5 flex w-full flex-col gap-5 justify-center items-center text-xs">
        <div className="flex text-black items-center justify-between w-full">
            <h1 className="text-rose text-xl font-semibold ">Apresiasi</h1>
            <Button className="w-1/3" onClick={() => setIsInputOpen(!isInputOpen)}>Tulis Apresiasi</Button>
        </div>
        {isInputOpen && <div className="w-full flex flex-col p-3 text-black rounded-xl bg-gray gap-2">
            <textarea className="border bg-transparent p-5 resize-none border-rose rounded-xl" rows={5}
             name="" id=""></textarea>
             <div className="w-full flex justify-end">
                <Button className="w-fit mx-3 hover:bg-transparent p-1 bg-transparent text-secondary text-[10px]">Batalkan</Button>
                <Button className="w-1/3 p-1 text-[10px]">Kirim apresiasi</Button>
             </div>
        </div>}
        <div className="w-full p-5 text-black rounded-xl border border-rose flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <Image src={'/profile.svg'} alt="" width={0} height={0}
                className="w-12 h-12"/>
                <div className="flex flex-col">
                    <p>Bambang</p>
                    <p>Pelajar</p>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat, officiis perspiciatis consequuntur animi nostrum corrupti laboriosam sint est sapiente.
            </p>
        </div>
       </div>
    </main>
  )
}

export default Profile;
