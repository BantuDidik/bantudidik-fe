'use client'

import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter()
  return (
    <main className="flex  flex-col items-center gap-[15px] pb-10">
      <div className="flex flex-col gap-2.5 self-stretch px-0 ">
        <Image src={'/illustration.svg'} alt='illustrasi-about' width={0} height={0} className="w-full"/>
      </div>
      <div className="flex w-[343px] flex-col items-center gap-10;">

        <div className="flex flex-col items-center gap-[15px] self-stretch;">
            <p className="text-xl text-[#1E1E1E] not-italic font-semibold leading-[34px]">Tentang Kami</p> 
            <p className="text-xs text-[#1E1E1E] text-center not-italic font-medium leading-[22px]">Dukung masa depan pendidikan Indonesia dengan gerakan kecil yang berdampak besar! Melalui BantuDidik, Anda bisa menjadi pahlawan pendidikan dengan memberikan bantuan kepada siswa-siswa berprestasi yang membutuhkan. Tak perlu donasi besar, setiap kontribusi Anda, sekecil apapun, membantu mereka meraih impian. Bagi para siswa, BantuDidik adalah jembatan menuju masa depan yang lebih cerah, menyediakan dukungan finansial untuk biaya pendaftaran, buku, hingga perlengkapan sekolah. Bergabunglah dengan kami dan jadilah bagian dari perubahan positif!</p>
        </div>

        <div className="flex-col items-center text-center gap-[15px] self-stretch;">
            <p className="text-xl my-5 text-[#1E1E1E] not-italic font-semibold leading-[34px]">Nilai-Nilai Kami</p>
            <div className="flex flex-col items-center gap-10 self-stretch px-5 py-0">
                <div className="flex items-center gap-[15px]">
                    <Image src={'/empathy.svg'} alt='illustrasi-about' width={0} height={0} className="w-[80px]"/>
                    <p className="text-2xl not-italic font-semibold leading-[34px] text-[#B0183D]">Empathy</p>
                </div>
                <div className="flex items-center gap-[15px]">
                    <p className="text-2xl not-italic font-semibold leading-[34px] text-[#B0183D]">Empowerment</p>
                    <Image src={'/study.svg'} alt='illustrasi-about' width={0} height={0} className="w-[80px]"/>
                </div>
                <div className="flex items-center gap-[15px]">
                    <Image src={'/achiever.svg'} alt='illustrasi-about' width={0} height={0} className="w-[80px]"/>
                    <p className="text-2xl not-italic font-semibold leading-[34px] text-[#B0183D]">Enrichment</p>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}
