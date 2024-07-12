'use client'
import { ApplicationInterface, PersonalInterface } from "@/app/funding/[id]/applicants/interface";
import ApplicantCard from "@/components/ApplicantCard";
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import axios from "axios";
import { ArrowLeft, WandSparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function RecommendationPage({ params }: { params: { id: string } }) {
    const [result, setResult] = useState<{idApplication: string, alasan:string}>()
    const [application, setApplication] = useState<ApplicationInterface>()
    const [user, setUser] = useState<PersonalInterface>()

    const getRecommendation = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/screening/${params.id}`,
            { withCredentials: true })
            console.log(response.data)
            setResult(response.data)
        } catch (error) {
            toast.error('Gagal mengambil data pendaftar')
            console.error(error)
        }
    }

    const fetchApplication = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/application/${result?.idApplication}`,
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
            console.log(response.data.name)
            setUser(response.data)
        } catch (error) {
            toast.error('Gagal mengambil data user')
        }
    }

    useEffect(() => {
        getRecommendation()
    }, [])

    useEffect(() => {
        if(result)
            fetchApplication()
    }, [result])

    useEffect(() => {
        if(application)
            fetchUser()
    }, [application])
  return (
    <div className="w-full p-5 flex flex-col gap-7">
        <Link href={`/funding/${params.id}`}>
            <ArrowLeft className="text-rose"/>
        </Link>
        <h1 className="text-black font-semibold text-xl text-center w-full px-10">Hasil Rekomendasi AI Assistant</h1>
        <div>
            <div className="bg-gray relative w-full flex flex-col rounded-xl p-5">
                <div className="w-full mb-2 flex justify-end">
                    <Chip className="bg-green-500 w-fit text-white text-[8px]">{application?.status}</Chip>
                </div>
                <div className="flex items-center gap-5">
                    <Image src={'/profile.svg'} alt="" width={0} height={0}
                    className="min-w-16 min-h-16"/>
                    <div className="flex flex-col gap-1 text-black">
                        <p className="font-semibold">{user?.name}</p>
                        <p className="text-secondary text-[11px]">
                            {application?.description}
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-3">
                    <Link className="w-1/3" href={`/funding/${params.id}/applicants/${result?.idApplication}`}>
                        <Button className="w-full text-xs">Lihat rincian</Button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="text-black text-xs items-center text-left flex gap-4">
            <WandSparkles className="min-w-16"/>
            <p>{result?.alasan}</p>
        </div>
    </div>
  )
}

export default RecommendationPage;
