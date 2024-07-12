'use client'
import { ApplicationInterface, PersonalInterface } from "@/app/funding/[id]/applicants/interface";
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Modal } from "@/components/modal";
import axios from "axios";
import { ArrowLeft, Calendar, CircleDollarSign, Clock10, Eye, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ApplicantsDetailModule({id, userId} : {id : string, userId: string}) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [application, setApplication] = useState<ApplicationInterface>()
    const [user, setUser] = useState<PersonalInterface>()

    const fetchApplication = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/application/${userId}`,
            { withCredentials: true })
            console.log(response.data)
            setApplication(response.data)
        } catch (error) {
            toast.error('Gagal mengambil data pendaftar')
            console.error(error)
        }
    }

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${application?.idUser}`,
            { withCredentials: true })
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            toast.error('Gagal mengambil data pendaftar')
            console.error(error)
        }
    }

    useEffect(() => {
        fetchApplication()
    }, [])

    useEffect(() => {
        if(application)
        fetchUser()
    }, [application])

    const handleAccept = async () => {

        const body = {
            idApplication : userId,
            idFunding : id
        }
        
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/application/accept`,
            body, { withCredentials: true })

            console.log(response)


        router.push(`/funding/${id}/applicants/${userId}/confirmation`)
    }

  return (
    <main className="relative flex flex-col items-center overflow-hidden h-full">
      <div className="bg-carmine justify-center items-center gap-2 w-full p-10 rounded-b-[15%] flex flex-col">
        <Link href={`/funding/${id}/applicants`} className="absolute left-0 top-0 m-5"><ArrowLeft /></Link>
        <Image
        src={'/profile.svg'}
        alt="Illustration"
        width={0}
        height={0}
        className="w-1/4"
         />
         <div className="flex flex-col items-center gap-1">
            <h1 className="text-lg text-white font-semibold">{user?.name}</h1>
            <p className="text-sm text-sunglow">{user?.occupation}</p>
         </div>
      </div>
      <div className="p-5 flex w-full flex-col gap-5 justify-center items-center text-xs">
        <div className="bg-sunglow w-full p-5 rounded-xl text-center text-black">
            {application?.description}
        </div>
        {application?.requirements.kipk && <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>KIP-K</p>
                <a target="_blank" href={application.requirements.kipk}>
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>}
        {application?.requirements.motivationLetter && <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>Motivation Letter</p>
                <a target="_blank" href={application.requirements.motivationLetter}>
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>}
        {application?.requirements.cv && <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>CV</p>
                <a target="_blank" href={application.requirements.cv}>
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>}
        {application?.requirements.identity && <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>Kartu Identitas</p>
                <a target="_blank" href={application.requirements.identity}>
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>}
        {application?.requirements.certificate && <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>Certificate</p>
                <a target="_blank" href={application.requirements.certificate}>
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>}
        <Button className="mt-16" onClick={()=>setIsModalOpen(!isModalOpen)}>Terima</Button>
       </div>
       {isModalOpen && <Modal>
            <p className="text-carmine text-base">Apakah Anda yakin ingin menerima pendaftar ini?</p>
            <p className="text-secondary">Pastikan persyaratan sudah sesuai agar bantuan Anda tepat sasaran dan berdampak maksimal.</p>
            <div className="flex w-full gap-4 justify-between">
                <Button 
                className="bg-transparent hover:bg-slate-200 border-2 border-carmine text-carmine" 
                onClick={() => setIsModalOpen(false)}>Kembali</Button>
                <Button onClick={() => handleAccept()}>Terima</Button>
            </div>
        </Modal>}
    </main>
  )
}

export default ApplicantsDetailModule;
