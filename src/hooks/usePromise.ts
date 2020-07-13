import { useCallback, useState, useMemo } from 'react';

export type PromiseApi<A extends any[], T> = (...args: A) => Promise<T>
export type LoadingState = {
  [key: string]: boolean
}

/**
 * This hook used for network request status
 *
 * @param requestMethod network request method
 */
export function usePromise<A extends any[], D>(requestMethod: PromiseApi<A, D>) {
  const [loading, setLoading] = useState<LoadingState>({})

  const doRequest = useCallback((id: string = 'default') => {
    return (...args: A) => {
      return new Promise<D>((resolve, reject) => {
        setLoading((value) => { return { ...value, [id]: true, default: true }})
        requestMethod(...args)
        .then((data) => {
          resolve(data)
          setLoading((value) => { return { ...value, [id]: false, default: false }})
        }).catch((error) => {
          reject(error)
          setLoading((value) => { return { ...value, [id]: false, default: false }})
        })
      })
    }
  }, [requestMethod])

  const defaultLoading = useMemo(() => {
    return loading['default']
  }, [loading])

  const defaultDoRequest = useMemo(() => {
    return doRequest()
  }, [doRequest])

  return {
    state: [defaultLoading, loading],
    methods: [defaultDoRequest, doRequest],
   } as const
}
