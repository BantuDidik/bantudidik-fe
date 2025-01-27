'use client'
import React, { useEffect, useState } from "react";
import { Chip } from "./chip";
import { useRouter } from "next/navigation";
import { FundingInterface } from "@/modules/FundingPageModule/interface";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";


function OfferCard({data} : {data: FundingInterface}) {
    const router = useRouter()
    const [giver, setGiver] = useState('')

    const fetchGiver = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${data.idUser}`,
            { withCredentials: true })
            console.log(response.data.name)
            setGiver(response.data.name)
        } catch (error) {
            toast.error('Gagal mengambil data user')
        }
    }
    useEffect(() => {
        fetchGiver()
    }, [])
  return (
    <div className="w-full flex gap-2 rounded-xl hover:cursor-pointer bg-gray text-rose p-3 font-semibold" onClick={() => router.push(`/funding/${data.id}`)}>
        <div className="flex flex-col w-2/5">
        {data.status == 'buka' ? (
                <Chip className="rounded-xl border-green-500 border text-green-500
                p-1 flex justify-center items-center h-max text-[8px] bg-transparent">Masih dibuka</Chip>
            ) : (
                <Chip className="rounded-xl border-red-500 border text-red-500
                p-1 flex justify-center items-center h-max text-[8px] bg-transparent">Ditutup</Chip>
            )}
        {data.type == 'Alat' ? (
            <Image src={'/penunjang.svg'} alt="" width={0} height={0} className="w-full"/>
        ) : (
            <Image src={'/biaya.svg'} alt="" width={0} height={0} className="w-full"/>
        )}
        </div>
        <div className="w-full">
            <div className="flex flex-col text-xs">
                <p>{data.title}</p>
                <p className="font-medium text-secondary">Dibuka oleh: <span className="text-rose/[0.7]">{giver}</span></p>
            </div>
            <div className="flex font-semibold my-3 text-[10px] gap-3 flex-wrap">
                {data.jenjang.map((jenjang, index) => (
                    <Chip key={index}>{jenjang}</Chip>
                ))}
            </div>
            <p className="font-medium text-secondary text-[10px] border-b pb-2 border-carmine">
                {data.description}
            </p>
            <p className="font-medium text-carmine text-[10px] p-1"> {data.applicants} orang telah mendaftar</p>
        </div>
    </div>
  )
}

export default OfferCard;
