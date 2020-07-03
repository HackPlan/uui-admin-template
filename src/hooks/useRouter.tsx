import { useContext } from 'react'
import { __RouterContext } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'

export default function useRouter<T = {}>() {
  return useContext(__RouterContext) as RouteComponentProps<T>
}
