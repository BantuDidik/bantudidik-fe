'use client'
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Modal } from "@/components/modal";
import { ArrowLeft, Calendar, CircleDollarSign, Clock10, Eye, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ConfirmationModule({id, userId} : {id : string, userId: string}) {
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
        <div className="flex flex-col w-full gap-1 font-medium">
            <p className="text-black">Nominal</p>
            <div className="w-full p-3 px-5 overflow-hidden text-carmine border-2 rounded-3xl border-carmine duration-200">
                Rp25000
            </div>
        </div>
        <div className="flex flex-col w-full gap-1 font-medium">
            <p className="text-black">Bank/E-Wallet Tujuan</p>
            <div className="w-full p-3 px-5 overflow-hidden text-carmine border-2 rounded-3xl border-carmine duration-200">
                BRI
            </div>
        </div>
        <div className="flex flex-col w-full gap-1 font-medium">
            <p className="text-black">No Rekening</p>
            <div className="w-full p-3 px-5 overflow-hidden text-carmine border-2 rounded-3xl border-carmine duration-200">
                12093832
            </div>
        </div>
        <Button className="" onClick={()=>setIsModalOpen(!isModalOpen)}>
            Sudah Mengirim Bantuan
        </Button>
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

export default ConfirmationModule;
