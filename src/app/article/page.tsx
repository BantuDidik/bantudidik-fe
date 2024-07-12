import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { ArrowLeft, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Articles() {
  return (
    <div className="flex flex-col gap-2 p-5">
        <Link href={'/home'} className="text-carmine w-full">
            <ArrowLeft size={30}/>
        </Link>
        <div className="flex items-center gap-3 my-5 text-2xl">
            <Award className="text-carmine" size={40}/> <p className="font-semibold text-black w-full">
                Kisah Sukses Para Didik
            </p>
        </div>
        <div className="flex flex-col w-full gap-10">
            <div className="w-full rounded-2xl">
                <Image src={'/article1.png'} alt="" width={400} height={200} 
                className="w-full rounded-2xl mb-3"/>
                <p className="text-secondary text-xs py-3 border-t-2">
                saya dulu sempat putus asa karena  belum pernah ikut kursus apapun sebab terhalang biaya, tetapi berkat para bantuan dari bantu didik...
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <p className="text-[10px] text-secondary">Oleh:</p>
                        <Image src={'/profile.svg'} width={0} height={0} alt=""
                        className="w-5 h-5"/>
                        <p className="text-[10px] text-black">
                            Samuel Jaya
                        </p>
                        <p className="text-[10px] text-carmine">
                            1 minggu yang lalu
                        </p>
                    </div>
                    <Button className="p-1 text-xs w-1/4">Lihat</Button>
                </div>
            </div>
            <div className="w-full rounded-2xl">
                <Image src={'/article2.png'} alt="" width={400} height={200} 
                className="w-full rounded-2xl mb-3"/>
                <p className="text-secondary text-xs py-3 border-t-2">
                    Dulu, aku sempat ngerasa bingung. Aku sangat suka seni gambar dan bercita-cita untuk mendapatkan beasiswa dari sebuah perlombaan seni...
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <p className="text-[10px] text-secondary">Oleh:</p>
                        <Image src={'/profile.svg'} width={0} height={0} alt=""
                        className="w-5 h-5"/>
                        <p className="text-[10px] text-black">
                            Christie Jone
                        </p>
                        <p className="text-[10px] text-carmine">
                            3 minggu yang lalu
                        </p>
                    </div>
                    <Button className="p-1 text-xs w-1/4">Lihat</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles;
