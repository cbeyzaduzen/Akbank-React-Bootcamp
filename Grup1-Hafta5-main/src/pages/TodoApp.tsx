import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export type TodoAppProps = {
  onLogout: () => void
}
const TodoApp: FC<TodoAppProps> = (props) => {
  const navigate= useNavigate()

  const handleLogout = () => {
    props.onLogout?.()
  }
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <Button onClick={()=>{navigate("/password-change")}}>Change Password</Button>
    </div>
  )
}

export default TodoApp
