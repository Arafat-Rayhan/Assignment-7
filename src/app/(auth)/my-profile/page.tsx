"use client"
import {updateUser} from '@/app/lib/auth-client'

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
    return (
        <div>
            {/* two btn wtith condition  and dropdwon*/}
            <h2>this is my profile</h2>
              <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Description>Update your profile information.</Description>
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
            <Label>Name</Label>
            <Input placeholder="new name" />
            <FieldError />
          </TextField>
          
           
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default Profile;