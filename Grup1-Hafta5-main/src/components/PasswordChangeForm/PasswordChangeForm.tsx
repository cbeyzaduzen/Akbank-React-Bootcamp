import React, { FC, useState } from 'react'
import { PasswordChangeFormProps, PasswordChangeFormValuesProps } from './PasswordChangeForm.types';
import { Styled } from './PasswordChangeForm.styled';
import Input from '../Input'
import Card from '../Card'
import { InputProps } from '../Input/Input.types';
import Button from '../Button';

const PasswordChangeForm: FC<PasswordChangeFormProps> = (props) => {
 const [formValues, setFormValues] = useState<PasswordChangeFormValuesProps>({username:"", oldPassword:"", newPassword:"", newPasswordConfirm:""});
const handleChange: InputProps["onChange"]=(event,value)=>{
  const name=event.target.name;
  setFormValues((prev)=>({...prev, [name]:value}))

}
const handleSubmit= ()=>{
  props.onPasswordChange?.(formValues)
}
  return (
    <Styled>
      <Card title="Create Password">
        <Input
          onChange={handleChange}
          name="username"
          value={formValues.username}
          icon="person"
          type="text"
          placeholder="Enter your email"
          style={{ marginBottom: '15px' }}
        />
        <Input
          onChange={handleChange}
          name="oldPassword"
          value={formValues.oldPassword}
          icon="key"
          type="password"
          placeholder="Enter your Old Password"
          style={{ marginBottom: '15px' }}
        />
        <Input
          onChange={handleChange}
          name="newPassword"
          value={formValues.newPassword}
          icon="person"
          type="password"
          placeholder="Enter your New Password"
          style={{ marginBottom: '15px' }}
        />
        <Input
          onChange={handleChange}
          name="newPasswordConfirm"
          value={formValues.newPasswordConfirm}
          icon="person"
          type="password"
          placeholder="Enter your New Password Confirm"
          style={{ marginBottom: '15px' }}
        />

        <Button onClick={handleSubmit}>Change Password</Button>
      </Card>
    </Styled>
  )
}
export default PasswordChangeForm;
