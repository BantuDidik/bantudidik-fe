'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft, Search, LucideSettings2 } from "lucide-react";
import OfferCard from "@/components/OfferCard";
import { Chip } from "@/components/chip";

function FundingPageModule() {
  return (
  <div className="flex flex-col p-5 gap-5">
    <h1 className="font-semibold text-xl text-black mt-5">Daftar Bantuan</h1>
    <div className="w-full flex gap-3">
        <div className="flex gap-2 px-4 p-2 rounded-xl text-sm w-full bg-gray">
            <Search className="text-rose"/>
            <input type="text" placeholder="Cari bantuan..." 
            className="bg-gray w-full outline-none focus:outline-none text-black"/>
        </div>
        <div className="bg-rose rounded-md p-2">
            <LucideSettings2 />
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
  </div>
    )
}

export default FundingPageModule;
