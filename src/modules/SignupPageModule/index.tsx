'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "@/config/db";
import { useRouter } from "next/navigation";

function SignupPageModule() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
          prompt: 'select_account',
        });
        const auth = getAuth();
        const userCred = await signInWithPopup(auth, provider);

        if (userCred) {
            const uid = userCred.user.uid
            Cookies.set('access_token', (userCred as any)._tokenResponse.idToken)
            Cookies.set('userId', uid)
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${uid}`,
                { withCredentials: true });
                if (res.status == 200) {
                    router.push('/home')
                }
            } catch (error: any) {
                if (error.response.status == 200) {
                    const email = userCred.user.email

                    const usersRef = collection(db, "users");
                    const q = query(usersRef, where("email", "==", email));
                    const querySnapshot = await getDocs(q);

                    if (querySnapshot.empty) {
                        await setDoc(doc(db, "users", userCred.user.uid), {
                            email: email,
                            password: password,
                            createdAt: new Date(),
                        });
                    }
                    toast.success('Login berhasil!')
                    router.push('/home')
                } else if (error.response.status == 404) {
                    toast.success('Login berhasil!')
                    router.push('/onboarding')
                } else {
                    toast.error('Terdapat kesalahan. Coba lagi')
                    console.error(error)
                }
            }
        }
      };

    const handleSignup = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
                email,
                password
              }, { withCredentials: true });
              console.log(response)
              toast.success('Email verifikasi telah dikirim')
        } catch (error: any) {
            toast.error('Terdapat kesalahan. Coba lagi')
        }
        setIsLoading(false)
    }

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
            <p className="text-slate-400 text-xs">Buat akun baru</p>
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
            <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-xs font-medium">Konfirmasi Password</label>
                <Input type="password" id="confirmPassword"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"/>
            </div>
        </div>
        <Button disabled={isLoading} onClick={handleSignup}>{isLoading ? 'Loading...' : 'Daftar'}</Button>
        <div className="flex items-center text-xs font-semibold justify-between">
            <div className="bg-rose h-[1px] w-2/5"></div>
            <p>atau</p>
            <div className="bg-rose h-[1px] w-2/5"></div>
        </div>
        <Button onClick={handleGoogle} className="bg-transparent border border-rose font-medium text-black hover:bg-slate-200 duration-300">
            <div className="flex justify-center gap-2">
                <Image src={'/google.svg'} alt="google" width={15} height={15} />
                <p>Daftar lewat Google</p>
            </div>
        </Button>
        <p className="text-xs text-center">Sudah punya akun? <Link href={'/login'} className="text-rose font-semibold">Sign in</Link></p>
    </div>
  </div>
    )
}

export default SignupPageModule;
