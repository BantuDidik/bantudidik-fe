'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function FundingRegisterPageModule() {
    const [alasan, setAlasan] = useState('')
    const [bantuan, setBantuan] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter()

    const handleSubmit = () => {
        router.push('/funding')
    }
  return (
  <div className="flex flex-col p-5">
    <Link href={'/home'} className="text-carmine w-fit">
        <ArrowLeft />
    </Link>
    <div className="flex flex-col gap-4 px-8">
        <h1 className="font-semibold text-xl text-black text-center px-5">Jenis Bantuan apa yang ingin anda berikan?</h1>
        <div onClick={() => router.push('/funding/create/biaya')}
        className="bg-rose hover:cursor-pointer flex flex-col p-7 items-center rounded-3xl gap-2">
            <h2 className="font-semibold text-xl">Biaya Pendidikan</h2>
            <Image src={'/biaya.svg'} alt="" width={0} height={0} className="w-1/2"/>
            <p className="text-xs text-center">Bantuan finansial untuk berbagai kebutuhan pendidikan seperti biaya pendaftaran sekolah atau universitas, biaya peralatan/buku, dan kursus tambahan.</p>
        </div>
        <div onClick={() => router.push('/funding/create/alat')}
        className="bg-rose hover:cursor-pointer flex flex-col p-7 text-center items-center rounded-3xl gap-2">
            <h2 className="font-semibold text-xl">Alat Penunjang Pendidikan</h2>
            <Image src={'/penunjang.svg'} alt="" width={0} height={0} className="w-1/2"/>
            <p className="text-xs text-center">Bantuan berupa barang untuk berbagai kebutuhan penunjang pendidikan seperti buku, alat tulis, elektronik, seragam, dll.</p>
        </div>
    </div>
  </div>
    )
}

export default FundingRegisterPageModule;
