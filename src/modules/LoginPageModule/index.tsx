'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

function LoginPageModule() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
  <div className="flex flex-col p-5 gap-10">
    <div className="w-full">
        <Link href={'/'} className="text-carmine">
            <ArrowLeft />
        </Link>
    </div>
    <div className="flex flex-col gap-5 text-black">
        <div className="flex flex-col gap-2 text-center mb-10">
            <h1 className="font-semibold text-xl">Selamat datang!</h1>
            <p className="text-slate-400 text-xs">Sign in  untuk lanjut</p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium">Alamat email</label>
                <Input type="text" id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-xs font-medium">Password</label>
                <Input type="password" id="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"/>
            </div>
        </div>
        <Button>Login</Button>
        <div className="flex items-center text-xs font-semibold justify-between">
            <div className="bg-rose h-[1px] w-2/5"></div>
            <p>or</p>
            <div className="bg-rose h-[1px] w-2/5"></div>
        </div>
        <Button className="bg-transparent border border-rose font-medium text-black hover:bg-slate-200 duration-300">
            <div className="flex justify-center gap-2">
                <Image src={'/google.svg'} alt="google" width={15} height={15} />
                <p>Continue  with Google</p>
            </div>
        </Button>
        <p className="text-xs text-center">Belum punya akun? <Link href={'/signup'} className="text-rose font-semibold">Sign up</Link></p>
    </div>
  </div>
    )
}

export default LoginPageModule;
