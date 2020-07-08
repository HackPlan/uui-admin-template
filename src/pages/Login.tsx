import React, { useState } from 'react';
import { TextField, Button } from '@hackplan/uui';
import { useInject } from '../hooks/useInject';
import { AuthApi } from '../api/AuthApi';

export function Login() {
  const [username, setUsername] = useState('uui-template')
  const [password, setPassword] = useState('password')

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
          <Button className="w-full mt-4" onClick={async () => {
            const data = await authApi.login({ username, password })
            console.log(data)
          }}>Login</Button>
        </div>
      </div>
    </div>
  )
}