'use client'
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Modal } from "@/components/modal";
import { ArrowLeft, Calendar, CircleDollarSign, Clock10, Eye, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ApplicantsDetailModule({id, userId} : {id : string, userId: string}) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAccept = () => {
        router.push(`/funding/3/applicants/4/confirmation`)
    }

  return (
    <main className="relative flex flex-col items-center overflow-hidden h-full">
      <div className="bg-carmine justify-center items-center gap-2 w-full p-10 rounded-b-[15%] flex flex-col">
        <Link href={'/funding'} className="absolute left-0 top-0 m-5"><ArrowLeft /></Link>
        <Image
        src={'/profile.svg'}
        alt="Illustration"
        width={0}
        height={0}
        className="w-1/4"
         />
         <div className="flex flex-col items-center gap-1">
            <h1 className="text-lg text-white font-semibold">Siti Siromah</h1>
            <p className="text-sm text-sunglow">Pelajar</p>
         </div>
      </div>
      <div className="p-5 flex w-full flex-col gap-5 justify-center items-center text-xs">
        <div className="bg-sunglow w-full p-5 rounded-xl text-center text-black">
            Untuk Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur eaque at sit in quod magnam nisi aliquam doloribus expedita.
        </div>
        <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>KIP-K</p>
                <a target="_blank" href="https://files.edgestore.dev/50ianbqbdkc74mtt/publicFiles/_public/98acab12-6c66-43e9-8800-cfbf150fa01e.pdf">
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>
        <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>Motivation Letter</p>
                <a target="_blank" href="https://files.edgestore.dev/50ianbqbdkc74mtt/publicFiles/_public/98acab12-6c66-43e9-8800-cfbf150fa01e.pdf">
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>
        <div className="w-full p-3 px-5 overflow-hidden h-[50px] text-carmine border-2 flex flex-col items-center rounded-3xl border-carmine duration-200">
            <div className="w-full mb-5 font-semibold flex justify-between items-center">
                <p>CV</p>
                <a target="_blank" href="https://files.edgestore.dev/50ianbqbdkc74mtt/publicFiles/_public/98acab12-6c66-43e9-8800-cfbf150fa01e.pdf">
                    <Eye className="cursor-pointer"/>
                </a>
            </div>
        </div>
        <Button className="mt-16" onClick={()=>setIsModalOpen(!isModalOpen)}>Terima</Button>
       </div>
       {isModalOpen && <Modal>
            <p className="text-carmine text-base">Apakah Anda yakin ingin menerima pendaftar ini?</p>
            <p className="text-secondary">Pastikan persyaratan sudah sesuai agar bantuan Anda tepat sasaran dan berdampak maksimal.</p>
            <div className="flex w-full gap-4 justify-between">
                <Button 
                className="bg-transparent hover:bg-slate-200 border-2 border-carmine text-carmine" 
                onClick={() => setIsModalOpen(false)}>Kembali</Button>
                <Button onClick={() => handleAccept()}>Terima</Button>
            </div>
        </Modal>}
    </main>
  )
}

export default ApplicantsDetailModule;
