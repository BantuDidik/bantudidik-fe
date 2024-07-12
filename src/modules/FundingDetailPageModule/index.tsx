'use client'
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import axios from "axios";
import { ArrowLeft, Calendar, CircleDollarSign, Clock10, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FundingInterface } from "../FundingPageModule/interface";
import Cookies from "js-cookie";

function FundingDetailPageModule({id} : {id : string}) {
    const router = useRouter()
    const [funding, setFunding] = useState<FundingInterface>()
    const [fundingType, setFundingType] = useState<string>()
    const [giver, setGiver] = useState('')

    const fetchGiver = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${funding?.idUser}`,
            { withCredentials: true })
            console.log(response.data.name)
            setGiver(response.data.name)
        } catch (error) {
            toast.error('Gagal mengambil data user')
        }
    }

    const fetchFunding = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/funding/${id}`,
            { withCredentials: true })
            console.log(response.data)
            setFunding(response.data)
            setFundingType(response.data.type)
        } catch (error) {
            toast.error('Gagal mengambil data funding')
            console.error(error)
        }
    }
    useEffect(() => {
        fetchFunding()
    }, [])

    useEffect(() => {
        if(funding)
        fetchGiver()
    }, [funding])

    // console.log({funding})
  return (
    <main className="relative flex flex-col items-center overflow-hidden h-full">
        <Link href={'/funding'} className="absolute left-0 m-5"><ArrowLeft /></Link>
      <div className="bg-carmine justify-center items-center gap-2 w-full h-[55%] rounded-b-[15%] flex flex-col">
        {funding?.status == 'buka' ? (
            <Chip className="bg-green-500 text-white">Masih dibuka</Chip>
        ) : (
            <Chip className="bg-red-500 text-white">Ditutup</Chip>
        )}
        {fundingType == 'alat' ? (
        <Image
            src={'/penunjang.svg'}
            alt="Illustration"
            width={0}
            height={0}
            className="w-2/5"
             />
        ) : (
            <Image
            src={'/biaya.svg'}
            alt="Illustration"
            width={0}
            height={0}
            className="w-2/5"
             />
        )}
         <div className="flex flex-col items-center gap-1">
            <h1 className="text-xl text-white font-semibold">{funding?.title}</h1>
            <p className="text-xs">Dibuka oleh: <span className="text-sunglow">{giver}</span></p>
            <p className="text-[10px] text-white items-center flex gap-1">
                <Clock10 size={10}/> 3 hari yang lalu
            </p>
         </div>
         <div className="flex gap-2 flex-wrap font-medium">
            {funding?.jenjang.map((jenjang, index) => (
                <Chip key={index}>{jenjang}</Chip>
            ))}
         </div>
         <div className="flex p-3 text-xs w-full justify-around">
            <div className="flex flex-col">
                <p className="flex items-center gap-1"><CircleDollarSign size={14}/> Total Bantuan</p>
                <p className="flex gap-1 text-sunglow">Rp{funding?.nominal}</p>
            </div>
            <div className="flex flex-col">
                <p className="flex items-center gap-1"><Calendar size={14}/> Tenggat Waktu</p>
                <p className="flex gap-1 text-sunglow">
                    tanggal
                </p>
            </div>
         </div>
      </div>
      <div className="p-5 flex flex-col w-full gap-5 justify-center items-center text-xs">
        <div className="flex flex-col w-full">
            <h2 className="font-semibold text-rose">Pesan</h2>
            <p className="text-black text-xs">
                {funding?.description}
            </p>
        </div>
        <div className="flex flex-col w-full gap-2">
            <h2 className="font-semibold text-rose">Syarat</h2>
            <div className="flex gap-2 flex-wrap w-full font-medium">
            {funding?.requirements.certificate && <Chip>Certificate</Chip>}
            {funding?.requirements.cv && <Chip>CV</Chip>}
            {funding?.requirements.motivationLetter && <Chip>Motivation Letter</Chip>}
            {funding?.requirements.identity && <Chip>Kartu Identitas</Chip>}
            {funding?.requirements.kipk && <Chip>KIP-K</Chip>}
            </div>
        </div>
        <div className="flex gap-2 text-black w-full items-center">
            <Users /> <span className="text-carmine font-medium">{funding?.applicants} orang</span> telah mendaftar bantuan ini
        </div>
        {funding?.idUser == Cookies.get('userId') ? (
            <Button className="mt-16" onClick={()=>router.push(`/funding/${id}/applicants`)}>Lihat Pendaftar</Button>
        ) : (
            <Button className="mt-16" onClick={()=>router.push(`/funding/register/${id}`)}>Ajukan Bantuan</Button>
        )
        }
       </div>
    </main>
  )
}

export default FundingDetailPageModule;
