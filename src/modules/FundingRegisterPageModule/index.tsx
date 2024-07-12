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

    const ref = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)
    const ref3 = useRef<HTMLInputElement>(null)
    const ref4 = useRef<HTMLInputElement>(null)
    const ref5 = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        router.push('/funding')
    }
  return (
  <div className="flex flex-col p-5 gap-10">
    <div className="w-full">
        <Link href={'/funding/3'} className="text-carmine">
            <ArrowLeft />
        </Link>
    </div>
    <div className="flex flex-col gap-5 text-black">
        <div className="flex flex-col gap-2 text-center mb-5">
            <h1 className="font-semibold text-xl">Form Pendaftaran Bantuan</h1>
            <p className="text-slate-400 text-xs">
            Lengkapi isian di bawah ini untuk mengajukan bantuan
            </p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="alasan" className="text-xs font-medium">Alasan mengajukan bantuan</label>
                <textarea rows={5} id="alasan" className="bg-gray text-xs resize-none rounded-xl p-3"
                value={alasan} onChange={(e) => setAlasan(e.target.value)}
                placeholder="Isi alasan Anda di sini"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Alamat domisili</label>
                <Input type="text" id="bantuan"
                value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                placeholder="Jl. Mawar No 10"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Kota</label>
                <Input type="text" id="bantuan"
                value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                placeholder="Malang"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Provinsi</label>
                <Input type="text" id="bantuan"
                value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                placeholder="Jawa Timur"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Kode Pos</label>
                <Input type="text" id="bantuan"
                value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                placeholder="16990"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Kartu Identitas</label>
                <div onClick={() => ref.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="bantuan" ref={ref} className="hidden"
                    value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                    placeholder="bantuan"/>
                    <p>Upload file</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Kartu KIP-K</label>
                <div onClick={() => ref2.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="bantuan" ref={ref2} className="hidden"
                    value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                    placeholder="bantuan"/>
                    <p>Upload file</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Sertifikat</label>
                <div onClick={() => ref3.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="bantuan" ref={ref3} className="hidden"
                    value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                    placeholder="bantuan"/>
                    <p>Upload file</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Motivation Letter (Max. 200 kata)</label>
                <div onClick={() => ref4.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="bantuan" ref={ref4} className="hidden"
                    value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                    placeholder="bantuan"/>
                    <p>Upload file</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">CV</label>
                <div onClick={() => ref5.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="bantuan" ref={ref5} className="hidden"
                    value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                    placeholder="bantuan"/>
                    <p>Upload file</p>
                </div>
            </div>
        </div>
        <Button onClick={handleSubmit}>Ajukan Bantuan</Button>
    </div>
  </div>
    )
}

export default FundingRegisterPageModule;
