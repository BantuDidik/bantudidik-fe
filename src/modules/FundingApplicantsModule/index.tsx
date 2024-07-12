'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft, Search, LucideSettings2, WandSparkles } from "lucide-react";
import OfferCard from "@/components/OfferCard";
import { Chip } from "@/components/chip";
import Navbar from "@/components/navbar";
import ApplicantCard from "@/components/ApplicantCard";

function FundingApplicantsModule({ id }: { id: string }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    
    const handleToggle = () => {
        setIsFilterOpen(!isFilterOpen)
    }
  return (
  <div className="flex flex-col text-black">
    <div className="p-5">
        <Link href={`/funding/${id}`} className="text-carmine">
            <ArrowLeft />
        </Link>
    </div>
    <h1 className="text-center font-semibold text-xl mb-5">Pendaftar</h1>
    <div className="px-5 mb-3">
        <div className="bg-rose overflow-hidden relative rounded-2xl w-full p-3 text-white flex flex-col gap-4">
            <h1 className="font-semibold text-white z-20 text-lg w-3/4">Kesulitan mencari kandidat yang tepat?</h1>
            <p className="text-sm z-20">Gunakan AI Assistant untuk menemukan penerima bantuan yang paling sesuai.</p>
            <Button className="bg-white text-rose z-20 hover:bg-slate-100">
                <div className="flex justify-center items-center gap-2">
                  <WandSparkles />  AI Assistant
                </div>
            </Button>
            <div className="absolute flex justify-center items-center rounded-[50%] border-[3px] border-carmine/[0.5] top-[-50px] z-10 left-[-30px] w-40 h-40">
          <div className="w-32 h-32 bg-carmine/[0.5] rounded-[50%]"></div>
        </div>
        </div>
    </div>
    <div className="flex flex-col gap-2 px-5">
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
    </div>
  </div>
    )
}

export default FundingApplicantsModule;
