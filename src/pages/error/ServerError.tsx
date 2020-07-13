import React from 'react';
import { Page } from '../../components/Page';
import { Button } from '@hackplan/uui';
import useRouter from '../../hooks/useRouter';

export function ServerError() {
  const router = useRouter()
  return (
    <Page>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl mt-4">500</h1>
        <p className="text-base mt-2 text-gray-700">抱歉，服务器出现了故障</p>
        <Button className="mt-4 mb-8" onClick={() => { router.history.replace('/') }}>回到首页</Button>
      </div>
    </Page>
  )
}