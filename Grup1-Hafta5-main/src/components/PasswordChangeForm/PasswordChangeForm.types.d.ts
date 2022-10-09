export type PasswordChangeFormProps = {
    onPasswordChange: (values: PasswordChangeFormValuesProps) => void
  }
  
  export type PasswordChangeFormValuesProps = {
    username: string,
    newPassword: string,
    newPasswordConfirm: string,
    oldPassword: string,

  }
  