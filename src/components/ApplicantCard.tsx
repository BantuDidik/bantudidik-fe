import React from "react";
import { Chip } from "./chip";
import { Button } from "./button";
import Link from "next/link";

function ApplicantCard() {
  return (
    <div className="bg-gray relative w-full flex flex-col rounded-xl p-5">
            <div className="w-full mb-2 flex justify-end">
                <Chip className="bg-green-500 w-fit text-white text-[8px]">Sudah menerima bantuan</Chip>
            </div>
            <div className="flex items-center justify-between gap-5">
                <div className="bg-sunglow min-h-16 min-w-16 rounded-[50%]"></div>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold">Siti Siromah</p>
                    <p className="text-secondary text-[11px]">Pelajar</p>
                    <p className="text-secondary text-[11px]">Untuk membayar uang pendaftaran bootcamp</p>
                </div>
            </div>
            <div className="w-full flex justify-end mt-3">
                <Link className="w-1/3" href={'/funding/3/applicants/4'}>
                    <Button className="w-full text-xs">Lihat rincian</Button>
                </Link>
            </div>
        </div>
  )
}

export default ApplicantCard;
