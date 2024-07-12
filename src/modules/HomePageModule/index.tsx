'use client'

import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Navbar from "@/components/navbar";
import OfferCard from "@/components/OfferCard";

function HomePageModule() {
    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get('access_token')
        if (token == undefined) router.push('/')
    }, [])

    return (
      <div className="bg-white min-h-screen text-black gap-5 flex flex-col items-center w-full py-5 px-7">
        <Navbar />
        <div className="p-2 w-full flex justify-between ">
          <div className="flex flex-col gap-1 text-xs font-semibold">
            <p className="text-base">Halo!</p>
            <p>Fathan Naufal Adhitama</p>
            <p className="text-slate-400">Pelajar</p>
          </div>
          {/* <div className="w-16 h-16 rounded-[50%] bg-sunglow">
          </div> */}
          <Image src={'/profile.svg'} alt="" width={0}  height={0} className="w-16 h-16" />
        </div>
        <div className="w-full overflow-hidden relative bg-rose p-5 flex flex-col items-start justify-center gap-3 rounded-3xl text-white">
          <h1 className="font-semibold w-full text-left z-20">Mau bantu apa <br /> hari ini?</h1>
          <Button onClick={()=>router.push('/funding/create')}
          className="text-[12px] bg-peach w-3/5 hover:bg-peach z-20 text-carmine hover:-translate-y-0.5 duration-150"
            >Tawarkan bantuan</Button>
          <Image src={'/tawarkanBantuan.svg'} alt="illustration" width={200} height={120} className="absolute right-0"/>
        </div>
        <section className="flex flex-col gap-4 items-center">
          <h2 className="text-md font-semibold w-full">Artikel untuk kamu</h2>
          <div className="flex gap-2">
              <div className="bg-carmine mb-3 w-full rounded-xl flex flex-col justify-between p-4 h-48">
                <p className="text-white text-sm">Kisah Sukses Para Didik</p>
                <Button onClick={()=>router.push('/forms')}
                className="text-[8px] font-semibold w-4/5 bg-peach  hover:bg-peach z-20 text-carmine hover:-translate-y-0.5 duration-150"
                  >Lihat lebih lanjut</Button>
              </div>
              <div className="bg-gray mb-3 w-full rounded-xl flex flex-col justify-between p-4 h-48">
                <p className="text-black text-sm">Tentang Kami</p>
                <Button onClick={()=>router.push('/forms')}
                className="text-[8px] font-semibold w-4/5 z-20 hover:-translate-y-0.5 duration-150"
                  >Lihat lebih lanjut</Button>
              </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 items-center w-full text-xs">
          <h2 className="text-md font-semibold w-full text-left">Bantuan yang cocok buat kamu</h2>
          <div className="flex flex-col gap-2 w-full">
            <OfferCard />
          </div>
        </section>
      </div>
    )
}

export default HomePageModule;
