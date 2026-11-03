"use client"
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import {signIn} from '@/app/lib/auth-client'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import{toast} from 'sonner'

      const SignInPage = ()=>{
    const router= useRouter()
    
    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
      
      
      const { error } = await signIn.email({
        email: data.email,
        password: data.password,
      });
      
      if (error) {
        toast.error("Invalid email or pssword")
        return;
      }
      
      toast.success(('wellcome again to web food market'))
      router.push("/");
};





  const hendelSubmitWithGogoole=async()=>{
          await signIn.social({
              provider:"google"
          })
      }
      const hendelSubmitWithGithub=async()=>{
          await signIn.social({
              provider:"github"
          })
      }


  return (
    <div className=" h-auto w-[1100px]  my-[24px] flex flex-col items-center  mx-auto" >
            {/* heder */}
            <div className="mx-auto mb-5 text-center ">
          <h1 className="font-bold text-gray-800 text-2xl">
          সাইন ইন
          </h1>

              <p className="mt-1 text-xs text-gray-500">
                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
              </p>
             </div>

        {/* from start */}
        <div className='<div className="mx-auto  w-[416px] rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
           <Form
       className="space-y-4"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
      >
         
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="mb-1.5 block text-sm font-medium text-gray-700"> ইমেইল</Label>
        <Input placeholder="john@example.com" 
         className={ 'w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100'} />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className="mb-1.5 block text-sm font-medium text-gray-700">পাসওয়ার্ড</Label>
        <Input placeholder="Enter your password"
         className={ 'w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100'}  />
        <FieldError />
      </TextField>
         
      

          {/* 2 btn */}
          <div className="flex gap-2">
        <Button type="submit"
        className="w-full rounded-md bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.99]">
        
          Submit
        </Button>
        <Button type="reset" variant="secondary"
        className="w-full rounded-md bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.99]">
          Reset
        </Button>
          </div>

              {/* or title */}
           <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>

          <span className="text-xs text-gray-400">অথবা</span>

          <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* social */}

            <div className="flex justify-center">
            
                    <Button onClick={hendelSubmitWithGogoole}
                     className="flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50">
                       <span className="font-bold text-red-500">𝐆</span>sign with gogoole</Button>
                    <Button onClick={hendelSubmitWithGithub}
                     className="flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"> <span className="font-bold text-gray-800">🐈‍⬛</span>sign with github</Button>
                    </div>
         

          {/* have you one */}
         
            <div>
                    <p className="mt-4 text-center text-xs text-gray-500">
                     অ্যাকাউন্ট নেই? 
                      <Link
                        href="/sign-up"
                        className="font-medium text-green-600 hover:underline"
                        >
                        সাইন আপ করুন
                      </Link>
                    </p>
                    </div>


            </Form>
          </div>

        
          {/* go to home page */}

        <div className="mt-5 text-center">
          <Link href="/" className="text-xs text-gray-400 transition hover:text-gray-600" >
            ← হোম পেজে ফিরে যান </Link>
        </div>
        
      
        
      </div>

  );
}

export default SignInPage;
