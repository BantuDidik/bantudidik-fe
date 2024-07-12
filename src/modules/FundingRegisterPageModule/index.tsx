'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEdgeStore } from '@/lib/edgestore';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FundingInterface } from "../FundingPageModule/interface";
import axios from "axios";
import { getUserId } from "@/lib/utils";


function FundingRegisterPageModule({id} : {id:string}) {
    const [alasan, setAlasan] = useState('')
    const [bantuan, setBantuan] = useState('')
    const [alamat, setAlamat] = useState('')
    const [kode, setKode] = useState('')
    const [kota, setKota] = useState('')
    const [provinsi, setProvinsi] = useState('')
    const [funding, setFunding] = useState<FundingInterface>()
    const [fundingType, setFundingType] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const [cv, setCV] = useState<File | null>(null)
    const [cvName, setCvName] = useState<string | null>(null)
    const [cvUrl, setCvUrl] = useState<string | null>(null)

    const [motlet, setMotlet] = useState<File | null>(null)
    const [motletName, setMotletName] = useState<string | null>(null)
    const [motletUrl, setMotletUrl] = useState<string | null>(null)
    
    const [certificate, setCertificate] = useState<File | null>(null)
    const [certificateName, setCertificateName] = useState<string | null>(null)
    const [certificateUrl, setCertificateUrl] = useState<string | null>(null)
    
    const [identity, setIdentity] = useState<File | null>(null)
    const [identityName, setIdentityName] = useState<string | null>(null)
    const [identityUrl, setIdentityUrl] = useState<string | null>(null)
    
    const [kipk, setKipk] = useState<File | null>(null)
    const [kipkName, setKipkName] = useState<string | null>(null)
    const [kipkUrl, setKipkUrl] = useState<string | null>(null)

    const [progress, setProgress] = useState<number>(0)
    const [togglePost, setTogglePost] = useState(false)
    const { edgestore } = useEdgeStore();
    const router = useRouter()

    const refCv = useRef<HTMLInputElement>(null)
    const refMotlet = useRef<HTMLInputElement>(null)
    const refCertificate = useRef<HTMLInputElement>(null)
    const refKipk = useRef<HTMLInputElement>(null)
    const refId = useRef<HTMLInputElement>(null)

    const postRequirements = async () => {
        const body = {
            "offerId": id,
            "idUser": getUserId(),
            "status": "Waiting",
            "description" : alasan,
            "requirements" : {
              "identity" : identityUrl,
              "cv" : cvUrl,
              "kipk" : kipkUrl,
              "motivationLetter" : motletUrl,
              "certificate": certificateUrl
            }
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/application/create`,
            body, { withCredentials: true })
            console.log(response.data)
            toast.success('Aplikasi berhasil diajukan.')
            router.push('/funding')
        } catch (error) {
            toast.error('Gagal mengupload data pendaftaran')
            console.error(error)
        }
    }

    const handleUpload = async () => {
        setIsLoading(true)
        if (cv) {
            const res = await edgestore.publicFiles.upload({
                file: cv,
                onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            setCvUrl(res.url)
        }
        if (motlet) {
            const res = await edgestore.publicFiles.upload({
                file: motlet,
                onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            setMotletUrl(res.url)
        }
        if (certificate) {
            const res = await edgestore.publicFiles.upload({
                file: certificate,
                onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            setCertificateUrl(res.url)
        }
        if (kipk) {
            const res = await edgestore.publicFiles.upload({
                file: kipk,
                onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            setKipkUrl(res.url)
        }
        if (identity) {
            const res = await edgestore.publicFiles.upload({
                file: identity,
                onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            setIdentityUrl(res.url)
        }

        setTogglePost(true)
        setIsLoading(false)
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
        if (togglePost){
            postRequirements()
        }
        setTogglePost(false)
    }, [togglePost])

  return (
  <div className="flex flex-col p-5 gap-10">
    <div className="w-full">
        <Link href={`/funding/${id}`} className="text-carmine">
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
                <label htmlFor="alamat" className="text-xs font-medium">Alamat domisili</label>
                <Input type="text" id="alamat"
                value={alamat} onChange={(e) => setAlamat(e.target.value)}
                placeholder="Jl. Mawar No 10"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="kote" className="text-xs font-medium">Kota</label>
                <Input type="text" id="kote"
                value={kota} onChange={(e) => setKota(e.target.value)}
                placeholder="Malang"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="provinsi" className="text-xs font-medium">Provinsi</label>
                <Input type="text" id="provinsi"
                value={provinsi} onChange={(e) => setProvinsi(e.target.value)}
                placeholder="Jawa Timur"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="kode" className="text-xs font-medium">Kode Pos</label>
                <Input type="text" id="kode"
                value={kode} onChange={(e) => setKode(e.target.value)}
                placeholder="16990"/>
            </div>
            {funding?.requirements.identity && <div className="flex flex-col gap-2">
                <label htmlFor="identitas" className="text-xs font-medium">Kartu Identitas</label>
                <div onClick={() => refId.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="identitas" ref={refId} className="hidden"
                    onChange={({target : { files }}) => {
                    if(files) {
                        setIdentity(files[0])
                        setIdentityName(files[0].name)
                    }
                }}/>
                    <p>{identity ? identityName : "Upload file"}</p>
                </div>
            </div>}
            {funding?.requirements.kipk && <div className="flex flex-col gap-2">
                <label htmlFor="kipk" className="text-xs font-medium">Kartu KIP-K</label>
                <div onClick={() => refKipk.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="kipk" ref={refKipk} className="hidden"
                    onChange={({target : { files }}) => {
                    if(files) {
                        setKipk(files[0])
                        setKipkName(files[0].name)
                    }
                }}/>
                    <p>{kipk ? kipkName : "Upload file"}</p>
                </div>
            </div>}
            {funding?.requirements.certificate && <div className="flex flex-col gap-2">
                <label htmlFor="sertifikat" className="text-xs font-medium">Sertifikat</label>
                <div onClick={() => refCertificate.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="sertifikat" ref={refCertificate} className="hidden"
                    onChange={({target : { files }}) => {
                    if(files) {
                        setCertificate(files[0])
                        setCertificateName(files[0].name)
                    }
                }}/>
                    <p>{certificate ? certificateName : "Upload file"}</p>
                </div>
            </div>}
            {funding?.requirements.motivationLetter && <div className="flex flex-col gap-2">
                <label htmlFor="motlet" className="text-xs font-medium">Motivation Letter (Max. 200 kata)</label>
                <div onClick={() => refKipk.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="motlet" ref={refKipk} className="hidden"
                    onChange={({target : { files }}) => {
                    if(files) {
                        setMotlet(files[0])
                        setMotletName(files[0].name)
                    }
                }}/>
                    <p>{motlet ? motletName : "Upload file"}</p>
                </div>
            </div>}
            {funding?.requirements.cv &&
                <div className="flex flex-col gap-2">
                <label htmlFor="cv" className="text-xs font-medium">CV</label>
                <div onClick={() => refCv.current?.click()}
                className="bg-gray border border-carmine hover:cursor-pointer rounded-3xl w-1/4 flex p-1 justify-center text-xs">
                    <input type="file" accept=".pdf" id="cv" ref={refCv} className="hidden"
                    onChange={({target : { files }}) => {
                    if(files) {
                        setCV(files[0])
                        setCvName(files[0].name)
                    }
                }}/>
                    <p>{cv ? cvName : "Upload file"}</p>
                </div>
            </div>}
        </div>
        <Button onClick={handleUpload} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Ajukan Bantuan'}
        </Button>
    </div>
  </div>
    )
}

export default FundingRegisterPageModule;
