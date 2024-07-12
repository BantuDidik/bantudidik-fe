'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Alat() {
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
    <div className="w-full">
        <Link href={'/funding/create'} className="text-carmine">
            <ArrowLeft />
        </Link>
    </div>
    <div className="flex flex-col gap-5 text-black">
        <div className="flex flex-col gap-2 text-center mb-5">
            <h1 className="font-semibold text-xl">Buat Bantuan</h1>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Judul Bantuan</label>
                <Input type="text" id="bantuan"
                value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                placeholder="Judul"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="text-xs font-medium">Pesan</label>
                <textarea rows={5} id="pesan" className="bg-gray text-xs resize-none rounded-xl p-3"
                value={alasan} onChange={(e) => setAlasan(e.target.value)}
                placeholder="Isi alasan Anda di sini"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Tanggal Tutup</label>
                <Input type="date" id="bantuan"
                value={bantuan} onChange={(e) => setBantuan(e.target.value)}
                placeholder="16990"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Jenjang</label>
                <div className="flex gap-4 text-xs flex-wrap text-secondary">
                    <div className="flex items-center">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-1">TK/SD</label>
                    </div>
                    <div className="flex items-center">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-1">SMP</label>
                    </div>
                    <div className="flex items-center">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-1">SMA</label>
                    </div>
                    <div className="flex items-center">
                        <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="penunjang" className="ms-1">Kuliah</label>
                    </div>
                    <div className="flex items-center">
                        <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="penunjang" className="ms-1">Lainnya</label>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-secondary border-t border-stone-500 pt-3 text-xs">
                <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                <label htmlFor="penunjang" className="ms-1">Jangan tampilkan identitas (Anonim)</label>
            </div>
        </div>
        <div className="flex flex-col gap-2 text-center mb-5">
            <div className="flex flex-col mb-5">
                <h1 className="font-semibold text-xl">Ketentuan</h1>
                <p className="text-secondary text-xs">Persyaratan yang diperlukan</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-2">Kartu Identitas</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-2">Sertifikat</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-2">KIP-K</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-2">Motivation Letter</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-2">CV</label>
                    </div>
                </div>
            </div>
        </div>
        <Button onClick={handleSubmit}>Buat Bantuan</Button>
    </div>
  </div>
    )
}

export default Alat;
