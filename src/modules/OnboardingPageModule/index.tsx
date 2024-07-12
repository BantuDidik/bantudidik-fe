'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

function OnboardingPageModule() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
                <label htmlFor="email" className="text-xs font-medium">Nama Lengkap</label>
                <Input type="text" id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Nama Lengkap"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium">Nomor Telepon</label>
                <Input type="text" id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="+62"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium">Tanggal Lahir</label>
                <Input type="date" id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="mm/dd/yy"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium">Pekerjaan</label>
                <Input type="text" id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Pelajar"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium">Lokasi</label>
                <Input type="text" id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Kota Depok"/>
            </div>
        </div>
        <Button>Konfirmasi</Button>
    </div>
  </div>
    )
}

export default OnboardingPageModule;
