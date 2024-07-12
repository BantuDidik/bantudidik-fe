'use client'

import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="relative flex flex-col items-center overflow-hidden h-full">
      <div className="bg-carmine w-[180%] h-1/2 rounded-b-[50%] flex justify-center items-end">
        <Image
        src={'landing.svg'}
        alt="Illustration"
        width={0}
        height={0}
        className="w-2/5 mb-16"
         />
      </div>
      <div className="py-10 px-5 flex flex-col gap-5 text-center justify-center items-center">
        <h1 className="text-black font-semibold text-xl">Buka Peluang Pendidikan dengan Bantuan Anda</h1>
        <p className="text-secondary text-sm">Saatnya berkontribusi untuk mendukung para didik meraih potensi terbaik mereka</p>
      </div>
      <Button className="w-4/5 mt-20" onClick={() => router.push('/login')}>Mulai</Button>
    </main>
  );
}
