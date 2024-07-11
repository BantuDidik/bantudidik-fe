import React from "react";
import { Chip } from "./chip";

function OfferCard() {
  return (
    <div className="w-full rounded-xl bg-gray text-rose p-3 font-semibold">
        <div className="flex justify-between">
            <div className="flex flex-col text-xs">
                <p>Biaya Pendaftaran PPKB</p>
                <p className="font-medium text-secondary">Dibuka oleh: <span className="text-rose/[0.7]">Xaviera</span></p>
            </div>
            <p 
            className="rounded-xl border-green-500 border text-green-500
            text-black px-2 h-max text-[8px]">
                Masih dibuka
            </p>
        </div>
        <div className="flex font-semibold my-3 text-[10px] gap-3 flex-wrap">
            <Chip>SMA</Chip>
            <Chip>Alat Penunjang</Chip>
            <Chip>Jalur Mandiri</Chip>
        </div>
        <p className="font-medium text-secondary text-[10px] border-b pb-2 border-carmine">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae sunt illo officiis fugit nostrum iusto debitis fuga distinctio, maiores officia?
        </p>
        <p className="font-medium text-carmine text-[10px] p-1"> 10 orang telah mendaftar</p>
    </div>
  )
}

export default OfferCard;
