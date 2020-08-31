import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@hackplan/uui';
import { useInject } from '../hooks/useInject';
import { AuthApi } from '../api/AuthApi';
import useRouter from '../hooks/useRouter';
import { useStore } from '../hooks/useStore';

export default function Login() {
  const { history } = useRouter()
  const { auth } = useStore()

  const [username, setUsername] = useState('uui-template')
  const [password, setPassword] = useState('password')

  useEffect(() => {
    if (auth && auth.token && auth.user) {
      history.push('/')
    }
  }, [auth, history])

  const authApi = useInject(AuthApi)

  return (
    <div className="w-full h-full flex justify-center items-center" style={{ backgroundColor: '#515761' }}>
      <div className="bg-white border rounded-sm shadow-xs" style={{ width: 500, height: 466 }}>
        <div className="m-12">
          <h1 style={{ color: '#2f65d1' }}>UUI Template</h1>
          <div className="flex flex-col items-start mb-2">
            <label>Username</label>
            <TextField value={username} onChange={(value) => setUsername(value)}></TextField>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label>Password</label>
            <TextField type='password' value={password} onChange={(value) => setPassword(value)}></TextField>
          </div>
          <Button styling={{ type: 'primary' }} className="w-full mt-4" onClick={async () => {
            const data = await authApi.login({ username, password })
            auth.login(data)
            history.push('/')
          }}>Login</Button>
        </div>
      </div>
    </div>
  )
}