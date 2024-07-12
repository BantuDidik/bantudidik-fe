'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { db, GoogleAuthProvider, getAuth, signInWithPopup } from "@/config/db";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LoginPageModule() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
          prompt: 'select_account',
        });
        const auth = getAuth();
        const userCred = await signInWithPopup(auth, provider);
        console.log(userCred)
        // set cookie
        Cookies.set('access_token', (userCred as any)._tokenResponse.idToken)
        Cookies.set('userId', userCred.user.uid)
        Cookies.set('userName', userCred.user.displayName!.split(' ')[0])

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
        router.push('/home')
      };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                email,
                password
              }, { withCredentials: true });
              console.log(response)
            if (response.status == 200) {
                const token = response.data.userCredential._tokenResponse.idToken
                const uid = response.data.userCredential.user.uid
                // Cookies.set('access_token', token)
                Cookies.set('userId', uid)
                toast.success('Login berhasil!')
                try {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal/${uid}`,
                    { withCredentials: true });
                } catch (error: any) {
                    if (error.response.status == 200) {
                        router.push('/home')
                    } else if (error.response.status == 404) {
                        router.push('/onboarding')
                    } else {
                        toast.error('Terdapat kesalahan. Coba lagi')
                        console.error(error)
                    }
                }
            }
        } catch (error) {
            toast.error('Terdapat kesalahan. Coba lagi')
            console.error(error)
        }
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
        <Button onClick={handleLogin}>Login</Button>
        <div className="flex items-center text-xs font-semibold justify-between">
            <div className="bg-rose h-[1px] w-2/5"></div>
            <p>or</p>
            <div className="bg-rose h-[1px] w-2/5"></div>
        </div>
        <Button onClick={handleGoogle} className="bg-transparent border border-rose font-medium text-black hover:bg-slate-200 duration-300">
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
