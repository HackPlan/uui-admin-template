import { useMemo, useState, useRef } from 'react';

export interface IPagination {
  offset: number
  limit: number
  count: number
}


export const EmptyPagination = () => ({
  offset: 0,
  limit: 50,
  count: 0,
} as IPagination)

/**
 * This hook used for Lsit or Table pagination manage.
 *
 * There are two states inside the hooks: `pagination` and `serverPagination`.
 * `pagination` used for current pagination status,
 * `serverPagination` used for next pagination status returned by the server.
 *
 * To change page, you should call `toNextPage`, `toPrevPage` or `toNthPage` to update offset.
 * To update server returned pagination, you should call `setServerPagination`.
 * @param _pagination initial pagination - Default: `EmptyPagination`
 */
export default function usePagination(_pagination: IPagination = EmptyPagination()) {
  const [pagination, _setPagination] = useState<IPagination>(_pagination)
  const [serverPagination, _setServerPagination] = useState<IPagination>(_pagination)
  const setPagination = useRef(_setPagination).current
  const setServerPagination = useRef(_setServerPagination).current

  const prevOffset = useMemo(() => serverPagination.offset - serverPagination.limit, [serverPagination.offset, serverPagination.limit])
  const nextOffset = useMemo(() => serverPagination.offset + serverPagination.limit, [serverPagination.offset, serverPagination.limit])

  const hasPrevious = useMemo(() => prevOffset >= 0, [prevOffset])
  const hasNext = useMemo(() => nextOffset < serverPagination.count, [nextOffset, serverPagination.count])
  const currentPage = useMemo(
    () => {
      if (serverPagination.offset === 0) return 1
      return serverPagination.offset && serverPagination.limit ? Math.floor(serverPagination.offset / serverPagination.limit) + 1 : 0
    },
    [serverPagination.offset, serverPagination.limit],
  )
  const totalPage = useMemo(() => serverPagination.limit ? Math.ceil(serverPagination.count / serverPagination.limit) : 0, [serverPagination.count, serverPagination.limit])

  const toNextPage = () => {
    setPagination({ offset: nextOffset, limit: serverPagination.limit, count: serverPagination.count })
  }
  const toPrevPage = () => {
    setPagination({ offset: Math.max(0, prevOffset), limit: serverPagination.limit, count: serverPagination.count })
  }
  const toNthPage = (n: number) => {
    setPagination({ offset: Math.min((n-1) * serverPagination.limit, serverPagination.count), limit: serverPagination.limit, count: serverPagination.count })
  }

  return {
    pagination,
    setPagination,
    serverPagination,
    setServerPagination,
    currentPage,
    totalPage,
    toNextPage,
    toPrevPage,
    toNthPage,
    hasPrevious,
    hasNext,
  }
}
