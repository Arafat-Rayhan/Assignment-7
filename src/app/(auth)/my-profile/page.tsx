"use client"
import {updateUser,useSession,signOut} from '@/app/lib/auth-client'

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

type Data ={
    name?:string
}


const Profile = () => {
   const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
     const userData:Data = Object.fromEntries(formData.entries())
     console.log(userData);
     
    const resData = updateUser({
         name: userData.name,
        })
        console.log(resData);
  };

   const {data:session} = useSession()
    return (
        <div className='flex flex-col items-center w-[1120px] mx-auto pb-[155px] gap-4 pt-[40px]'>
            {/* two btn wtith condition  and dropdwon*/}
            <h2 className='font-bold text-[24px]'>আমার প্রোফাইল</h2>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            <div className='w-[735px] h-[120px] rounded-[16px] flex justify-between items-center p-[25px] bg-[#FAFCFA]'>
                <div>
                <h2>{session?.user.name}</h2>
                <h3>{session?.user.email}</h3>
                </div>
                <div className='w-[180px] h-[40px] border border-solid border-red-900 flex justify-center items-center rounded-[18px]'>
                <button onClick={()=>signOut()}>↩ সাইন আউট</button>
                </div>
            </div>


            <div className='w-[735px] bg-[#FAFCFA] rounded-[16px] flex p-[24px] pl-[40px]'>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
            <Fieldset>
             <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
                if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className='font-semibold text-[18px]'>তথ্য</Label>
            <Input placeholder="new name" className={'w-[645px] h-[40px]'} />
            <FieldError />
          </TextField>
          
           
            </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit"
          className='w-full rounded-md bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.99]'>
            Save changes
          </Button>
          <Button type="reset" variant="secondary"
          className='w-full rounded-md bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.99]'>
            Cancel
          </Button>
        </Fieldset.Actions>
         </Fieldset>
             </Form>
            </div>
        </div>
    
    );
};

export default Profile;