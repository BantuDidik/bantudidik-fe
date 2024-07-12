'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { getUserId } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Alat() {
    const [pesan, setPesan] = useState('')
    const [judul, setJudul] = useState('')
    const [metode, setMetode] = useState('')
    const [nominal, setNominal] = useState('')
    const [date, setDate] = useState('')
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [isIdentity, setIsIdentity] = useState(false)
    const [isKIPK, setIsKIPK] = useState(false)
    const [isCV, setIsCV] = useState(false)
    const [isMotlet, setIsMotlet] = useState(false)
    const [isCertificate, setIsCertificate] = useState(false)
    const [jenjangArray, setJenjangArray] = useState<string[]>([])

    const filterJenjang = (level: string) => {
        let tempArray = jenjangArray
        if (jenjangArray.includes(level)) {
            tempArray.splice(tempArray.indexOf(level), 1);
        } else {
            tempArray.push(level);
        }
        setJenjangArray(tempArray)
        console.log(tempArray)
    }

    useEffect(() => {
        console.log(jenjangArray)
    }, [jenjangArray])


    const router = useRouter()
    
    const handleSubmit = async () => {
        const body = {
            "title": judul,
            "description": pesan,
            "type": "Alat",
            "idUser": getUserId(),
            "status": "buka",
            "transferMethod": metode,
            "imageUrl": null,
            "nominal": Number.parseInt(nominal),
            "applicants": 0,
            "jenjang": jenjangArray,
            "isAnonymous": false,
            "startDate": Date.now(),
            "endDate": date,
            "requirements" : {
              "identity" : isIdentity,
              "cv" : isCV,
              "kipk" : isKIPK,
              "motivationLetter" : isMotlet,
              "certificate": isCertificate
            }
          }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/funding/create`,
                body, { withCredentials: true });
            toast.success('Bantuan berhasil dibuat!')
            router.push('/funding')
        } catch (error) {
            toast.error('Terdapat kesalahan, bantuan gagal dibuat.')
            console.error(error)
        }
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
                <label htmlFor="judul" className="text-xs font-medium">Judul</label>
                <Input type="text" id="bantuan"
                value={judul} onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="text-xs font-medium">Pesan</label>
                <textarea rows={5} id="pesan" className="bg-gray text-xs resize-none rounded-xl p-3"
                value={pesan} onChange={(e) => setPesan(e.target.value)}
                placeholder="Isi alasan Anda di sini"/>
            </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xs font-medium">Tanggal Tutup</label>
                <Input type="date" id="date"
                value={date} onChange={(e) => setDate(e.target.value)}
                placeholder="16990"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bantuan" className="text-xs font-medium">Jenjang</label>
                <div className="flex gap-4 text-xs flex-wrap text-secondary">
                    <div className="flex items-center">
                        <input id="tk" onChange={(e) => filterJenjang(e.target.value)} type="checkbox" value="TK/SD" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="tk" className="ms-1">TK/SD</label>
                    </div>
                    <div className="flex items-center">
                        <input id="smp" onChange={(e) => filterJenjang(e.target.value)} type="checkbox" value="SMP" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="smp" className="ms-1">SMP</label>
                    </div>
                    <div className="flex items-center">
                        <input id="sma" onChange={(e) => filterJenjang(e.target.value)} type="checkbox" value="SMA" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="sma" className="ms-1">SMA</label>
                    </div>
                    <div className="flex items-center">
                        <input id="kuliah" onChange={(e) => filterJenjang(e.target.value)} type="checkbox" value="Kuliah" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="kuliah" className="ms-1">Kuliah</label>
                    </div>
                    <div className="flex items-center">
                        <input id="lainnya" onChange={(e) => filterJenjang(e.target.value)} type="checkbox" value="Lainnya" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="lainnya" className="ms-1">Lainnya</label>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-secondary border-t border-stone-500 pt-3 text-xs">
                <input onChange={() => setIsAnonymous(!isAnonymous)} id="anonim" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                <label htmlFor="anonim" className="ms-1">Jangan tampilkan identitas (Anonim)</label>
            </div>
            <div className="flex flex-col gap-2 text-center mb-5">
            <div className="flex flex-col mb-5">
                <h1 className="font-semibold text-xl">Ketentuan</h1>
                <p className="text-secondary text-xs">Persyaratan yang diperlukan</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input onChange={() => setIsIdentity(!isIdentity)} id="identitas" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="identitas" className="ms-2">Kartu Identitas</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input onChange={() => setIsCertificate(!isCertificate)} id="sertif" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="sertif" className="ms-2">Sertifikat</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input onChange={() => setIsKIPK(!isKIPK)} id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="biaya" className="ms-2">KIP-K</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input onChange={() => setIsMotlet(!isMotlet)} id="motlet" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="motlet" className="ms-2">Motivation Letter</label>
                    </div>
                </div>
                <div className="border w-full border-carmine p-3 rounded-xl">
                    <div className="flex items-center text-xs font-medium">
                        <input onChange={() => setIsCV(!isCV)} id="cv" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                        <label htmlFor="cv" className="ms-2">CV</label>
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
