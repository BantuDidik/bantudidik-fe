'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft, Search, LucideSettings2 } from "lucide-react";
import OfferCard from "@/components/OfferCard";
import { Chip } from "@/components/chip";
import Navbar from "@/components/navbar";

function FundingPageModule() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    
    const handleToggle = () => {
        setIsFilterOpen(!isFilterOpen)
    }
  return (
  <div className="flex flex-col gap-5">
    <Navbar />
    <main className="px-5 flex flex-col gap-3">
        <h1 className="font-semibold text-xl text-black mt-5">Daftar Bantuan</h1>
        <div className="w-full flex gap-3">
            <div className="flex gap-2 px-4 p-2 rounded-xl text-sm w-full bg-gray">
                <Search className="text-rose"/>
                <input type="text" placeholder="Cari bantuan..." 
                className="bg-gray w-full outline-none focus:outline-none text-black"/>
            </div>
            <div className="bg-rose hover:cursor-pointer rounded-md p-2" onClick={() => handleToggle()}>
                <LucideSettings2 />
            </div>
        </div>
        <div className={`bg-gray flex flex-col duration-300 overflow-hidden rounded-md gap-2 ${isFilterOpen && 'p-2'}`}
        style={{
            height: isFilterOpen ? '200px' : '0px'
        }}>
            <h1 className="text-carmine font-medium">Filter</h1>
            <div className="flex justify-between gap-2 text-xs w-full">
                <div className="flex flex-col gap-1">
                    <h2 className="text-rose">Jenis Bantuan</h2>
                    <div className="flex flex-col gap-1 text-secondary text-[11px]">
                        <div className="flex items-center">
                            <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="biaya" className="ms-2">Biaya</label>
                        </div>
                        <div className="flex items-center">
                            <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="penunjang" className="ms-2">Alat</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-rose">Jenjang</h2>
                    <div className="flex flex-col gap-1 w-full text-secondary text-[11px]">
                        <div className="flex items-center">
                            <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="biaya" className="ms-2">TK/SD</label>
                        </div>
                        <div className="flex items-center">
                            <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="biaya" className="ms-2">SMP</label>
                        </div>
                        <div className="flex items-center">
                            <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="biaya" className="ms-2">SMA</label>
                        </div>
                        <div className="flex items-center">
                            <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="penunjang" className="ms-2">Kuliah</label>
                        </div>
                        <div className="flex items-center">
                            <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="penunjang" className="ms-2">Lainnya</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-rose">Urutkan dari</h2>
                    <div className="flex flex-col gap-1 text-secondary text-[11px]">
                        <div className="flex items-center">
                            <input id="biaya" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="biaya" className="ms-2">Biaya pendidikan</label>
                        </div>
                        <div className="flex items-center">
                            <input id="penunjang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-rose" />
                            <label htmlFor="penunjang" className="ms-2">Jumlah pendaftar</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <Button className="text-[11px] w-1/4 p-1">Apply</Button>
            </div>
        </div>
        <div className="flex gap-3">
            <Chip className="text-white bg-rose hover:cursor-pointer">Semua</Chip>
            <Chip className="text-white bg-rose hover:cursor-pointer">Mendaftar</Chip>
            <Chip className="text-white bg-rose hover:cursor-pointer">Diterima</Chip>
        </div>
        <section className="flex flex-col gap-3">
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
        </section>
    </main>
  </div>
    )
}

export default FundingPageModule;
