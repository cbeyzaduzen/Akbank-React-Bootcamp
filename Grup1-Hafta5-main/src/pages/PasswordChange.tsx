import axios from 'axios';
import React, { FC } from 'react'
import PasswordChangeForm from '../components/PasswordChangeForm';
import { PasswordChangeFormProps } from '../components/PasswordChangeForm/PasswordChangeForm.types';

export type PasswordChangePageProps = {
  token: string
  
}

 const PasswordChange:FC<PasswordChangePageProps> = (props) => {
  const handlePasswordChange:PasswordChangeFormProps["onPasswordChange"]= (values) => {
    axios.post('http://localhost:81/auth/password-change', values, {headers:{
      Authorization:`Bearer ${props.token} `
    }}).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})

  }
  return (
    <PasswordChangeForm onPasswordChange={handlePasswordChange} />
  )
}

export default PasswordChange;
