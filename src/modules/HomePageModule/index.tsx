'use client'

import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "@/components/navbar";
import OfferCard from "@/components/OfferCard";
import { MessageSquareHeart, MessageSquareMore } from "lucide-react";
import axios from "axios";
import { FundingInterface } from "../FundingPageModule/interface";

function HomePageModule() {
    const router = useRouter()
    const [fundings, setFundings] = useState<FundingInterface[]>([])
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const token = Cookies.get('access_token')
        const idUser = Cookies.get('userId')

        if (token === undefined) router.push('/login')

        const fetchFundings = async() => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/funding/list`, { withCredentials: true });
            setFundings(response.data)
        }

        const fetchUser = async() => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${idUser}`, { withCredentials: true });
            setUser(response.data)
        }

        fetchFundings()
        fetchUser()

    }, [])

    return (
      <div className="bg-white relative min-h-screen text-black gap-5 flex flex-col items-center w-full py-5 px-7">
        <Navbar />
        <div className="p-2 w-full flex justify-between ">
          <div className="flex flex-col gap-1 text-xs font-semibold">
            <p className="text-base">Halo!</p>
            { user === null ? '' :
                <>
                    <p>{user.name}</p>
                    <p className="text-slate-400">{user.occupation}</p>
                </>
            }
          </div>
          <Image onClick={() => router.push('/profile')} src={'/profile.svg'} 
          alt="" width={0}  height={0} className="w-16 h-16 hover:cursor-pointer" />
        </div>
        <div className="w-full overflow-hidden relative bg-rose p-5 flex flex-col items-start justify-center gap-3 rounded-3xl text-white">
          <h1 className="font-semibold w-full text-left z-20">Mau bantu apa <br /> hari ini?</h1>
          <Button onClick={()=>router.push('/funding/create')}
          className="text-[12px] bg-peach w-3/5 hover:bg-peach z-20 text-carmine hover:-translate-y-0.5 duration-150"
            >Tawarkan bantuan</Button>
          <Image src={'/tawarkanBantuan.svg'} alt="illustration" width={200} height={120} className="absolute right-0"/>
        </div>
        <section className="flex flex-col gap-4 items-center">
          <h2 className="text-base font-semibold w-full">Artikel untuk kamu</h2>
          <div className="flex gap-8">
              <div className="bg-carmine mb-3 w-full rounded-xl flex flex-col justify-between p-4 h-48">
                <p className="text-white text-sm">Kisah Sukses Para Didik</p>
                <Button onClick={()=>router.push('/article')}
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
        <section className="flex flex-col gap-4 items-center w-full text-xs mb-16">
          <h2 className="text-base font-semibold w-full text-left">Bantuan yang cocok buat kamu</h2>
          <div className="flex flex-col gap-2 w-full">
            {fundings.slice(0, 3).map((funding, index) => 
                <OfferCard data={funding} key={index}/>
            )}
            
          </div>
        </section>
        <div onClick={() => router.push('/forum')}
            className="bg-rose hover:cursor-pointer text-white flex text-s gap-2 items-center justify-center rounded-xl p-2 fixed bottom-24 right-10 md:right-[39%] w-[110px] h-[50px] hover:scale-105 transition-transform duration-200">
            <MessageSquareMore size={24}/> Forum
        </div>
      </div>
    )
}

export default HomePageModule;
