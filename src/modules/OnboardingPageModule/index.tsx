'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function OnboardingPageModule() {
    const [nama, setNama] = useState('')
    const [job, setJob] = useState('')
    const [location, setLocation] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const router = useRouter()

    const isNumberValid = () => {
        const indonesianPhoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
        return indonesianPhoneRegex.test(number)
    }

    const handleConfirm = async () => {
        if (!isNumberValid()) {
            toast.error('Nomor telepon tidak valid')
            return;
        }
        const body = {
            "idUser": Cookies.get('userId'),
            "name": nama,
            "phoneNumber": number,
            "birthDate": date,
            "occupation": job
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/personal/create`, 
                body, { withCredentials: true });
            if (response.status == 200) {
                router.push('/home')
            }
        } catch (error) {
            toast.error('Terdapat kesalahan')
        }
        
    }
  return (
  <div className="flex flex-col p-5 gap-10">
    <div className="w-full">
        <Link href={'/'} className="text-carmine">
            <ArrowLeft />
        </Link>
    </div>
    <div className="flex flex-col gap-5 text-black">
        <div className="flex flex-col gap-2 text-center mb-5">
            <h1 className="font-semibold text-xl">Isi Informasi Tentang Kamu</h1>
            <p className="text-slate-400 text-xs">Buat akun baru</p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="text-xs font-medium">Nama Lengkap</label>
                <Input type="text" id="nama"
                value={nama} onChange={(e) => setNama(e.target.value)}
                placeholder="Nama Lengkap"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="telepon" className="text-xs font-medium">Nomor Telepon</label>
                <Input type="text" id="telepon"
                value={number} onChange={(e) => setNumber(e.target.value)}
                placeholder="+62"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xs font-medium">Tanggal Lahir</label>
                <Input type="date" id="date"
                value={date} onChange={(e) => setDate(e.target.value)}
                placeholder="mm/dd/yy"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="job" className="text-xs font-medium">Pekerjaan</label>
                <Input type="text" id="job"
                value={job} onChange={(e) => setJob(e.target.value)}
                placeholder="Pelajar"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="lokasi" className="text-xs font-medium">Lokasi</label>
                <Input type="text" id="lokasi"
                value={location} onChange={(e) => setLocation(e.target.value)}
                placeholder="Kota Depok"/>
            </div>
        </div>
        <Button onClick={handleConfirm}>Konfirmasi</Button>
    </div>
  </div>
    )
}

export default OnboardingPageModule;
