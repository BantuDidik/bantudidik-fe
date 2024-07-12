'use client'
import React, { useEffect, useState } from "react";
import { Chip } from "./chip";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { ApplicationInterface, PersonalInterface } from "@/app/funding/[id]/applicants/interface";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ApplicantCard({data} : {data: ApplicationInterface}) {
    const router = useRouter()
    const [user, setUser] = useState<PersonalInterface>()

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${data.idUser}`,
            { withCredentials: true })
            console.log(response.data.name)
            setUser(response.data)
        } catch (error) {
            toast.error('Gagal mengambil data user')
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
  return (
    <div className="bg-gray relative w-full flex flex-col rounded-xl p-5">
            <div className="w-full mb-2 flex justify-end">
                <Chip className="bg-green-500 w-fit text-white text-[8px]">Sudah menerima bantuan</Chip>
            </div>
            <div className="flex items-center gap-5">
                <Image src={'/profile.svg'} alt="" width={0} height={0}
                className="min-w-16 min-h-16"/>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold">{user?.name}</p>
                    <p className="text-secondary text-[11px]">{user?.occupation}</p>
                    <p className="text-secondary text-[11px]">
                        {data.description}
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-end mt-3">
                <Link className="w-1/3" href={`/funding/${data.offerId}/applicants/${data.id}`}>
                    <Button className="w-full text-xs">Lihat rincian</Button>
                </Link>
            </div>
        </div>
  )
}

export default ApplicantCard;
