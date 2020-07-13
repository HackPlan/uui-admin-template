import { useCallback, useState, useRef, useEffect } from 'react';

export type RequestApi<A extends any[], T> = (...args: A) => Promise<T>

/**
 * This hook used for network request status
 *
 * @param requestMethod network request method
 */
export function useRequest<A extends any[], D>(requestMethod: RequestApi<A, D>, initialValue?: D) {
  const [data, setData] = useState<D | undefined>(initialValue)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  const isMounted = useRef<boolean | null>(true)

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false }
  }, []);

  const doRequest = useCallback((...args: A) => {
    setLoading(true)
    setError(undefined)
    requestMethod(...args)
    .then((data) => {
      if (isMounted.current) {
        setData(data)
      }
    }).catch((error) => {
      if (isMounted.current) {
        setError(error)
      }
    }).finally(() => {
      if (isMounted.current) {
        setLoading(false)
      }
    })

    /**
     * Deprecated.
     * Since we use isMounted ref to manage hooks cleanup,
     * returning cleanup function of doRequest is unnecessary.
     * It's safe to remove this line when we update all useRequest.doRequest cleanup usage
     */
    return () => {}
  }, [requestMethod])

  return {
    data: [data, setData],
    state: [loading, error],
    methods: [doRequest]
  } as const
}
