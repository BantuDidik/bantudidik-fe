'use client'
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { ArrowLeft, Calendar, CircleDollarSign, Clock10, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function FundingDetailPageModule({id} : {id : string}) {
    const router = useRouter()
  return (
    <main className="relative flex flex-col items-center overflow-hidden h-full">
        <Link href={'/funding'} className="absolute left-0 m-5"><ArrowLeft /></Link>
      <div className="bg-carmine justify-center items-center gap-2 w-full h-[55%] rounded-b-[15%] flex flex-col">
        <Chip className="bg-green-500 text-white">Masih dibuka</Chip>
        <Image
        src={'/penunjang.svg'}
        alt="Illustration"
        width={0}
        height={0}
        className="w-2/5"
         />
         <div className="flex flex-col items-center gap-1">
            <h1 className="text-xl text-white font-semibold">Biaya Tes SIMAK</h1>
            <p className="text-xs">Dibuka oleh: <span className="text-sunglow">Xaviera</span></p>
            <p className="text-[10px] text-white items-center flex gap-1">
                <Clock10 size={10}/> 3 hari yang lalu
            </p>
         </div>
         <div className="flex gap-2 flex-wrap font-medium">
            <Chip>SMA</Chip>
            <Chip>Biaya</Chip>
            <Chip>Kuliah</Chip>
         </div>
         <div className="flex p-3 text-xs w-full justify-around">
            <div className="flex flex-col">
                <p className="flex items-center gap-1"><CircleDollarSign size={14}/> Total Bantuan</p>
                <p className="flex gap-1 text-sunglow">Rp2.000.000</p>
            </div>
            <div className="flex flex-col">
                <p className="flex items-center gap-1"><Calendar size={14}/> Tenggat Waktu</p>
                <p className="flex gap-1 text-sunglow">23 Agustus 2024</p>
            </div>
         </div>
      </div>
      <div className="p-5 flex flex-col gap-5 justify-center items-center text-xs">
        <div className="flex flex-col">
            <h2 className="font-semibold text-rose">Pesan</h2>
            <p className="text-black text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</p>
        </div>
        <div className="flex flex-col w-full gap-2">
            <h2 className="font-semibold text-rose">Syarat</h2>
            <div className="flex gap-2 flex-wrap font-medium">
                <Chip>SMA</Chip>
                <Chip>Biaya</Chip>
                <Chip>Kuliah</Chip>
            </div>
        </div>
        <div className="flex gap-2 text-black w-full items-center">
            <Users /> <span className="text-carmine font-medium">20 orang</span> telah mendaftar bantuan ini
        </div>
        <Button className="mt-16" onClick={()=>router.push(`/funding/register/${id}`)}>Ajukan Bantuan</Button>
       </div>
    </main>
  )
}

export default FundingDetailPageModule;
