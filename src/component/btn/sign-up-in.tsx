"use client";
import {Button} from "@heroui/react";
import {useRouter} from 'next/navigation'
const SignUpIn = () => {
    const router = useRouter()
    const router2 = useRouter()
    return (
        <div>
             <div className="flex items-center gap-3">
                <Button size="sm" onClick={()=>router.push("/sign-up")}>Sign up</Button>
                <Button size="md" onClick={()=>router.push("/sign-in")}>Sign in</Button>
            </div>
        </div>
    );
};

export default SignUpIn;