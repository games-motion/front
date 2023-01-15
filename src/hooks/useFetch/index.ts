/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react'
import { initialState, reducer, ACTION_CREATOR_TYPES } from './reducer'

interface IUseFetchReturnProps<T> {
  isLoading: boolean
  isError: boolean
  data: T | null
  refetch: () => Promise<void>
  removeCache: () => void
}

type UseFetchOptions = {
  interval?: number
  retries?: number
}

export function useFetch<T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: UseFetchOptions
): IUseFetchReturnProps<T> {
  const [{ data, isError, isLoading }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    handleRequest()
  }, [])

  useEffect(() => {
    if (!options?.interval) return

    const interval = setInterval(async () => {
      try {
        await handleRequest()
      } catch (err) {
        console.error(err)
      }
    }, options?.interval)

    return () => {
      clearInterval(interval)
    }
  }, [options?.interval])

  async function refetch() {
    try {
      const localData = localStorage.getItem(key)
      if (localData) {
        return dispatch({
          type: ACTION_CREATOR_TYPES.FETCHED,
          payload: JSON.parse(localData),
        })
      }

      dispatch({
        type: ACTION_CREATOR_TYPES.PENDING,
      })

      const data = await fetcher()

      localStorage.setItem(key, JSON.stringify(data))

      dispatch({
        type: ACTION_CREATOR_TYPES.FETCHED,
        payload: data,
      })
    } catch (err) {
      console.log(err)

      dispatch({
        type: ACTION_CREATOR_TYPES.ERROR,
      })
    }
  }

  async function handleRequest() {
    try {
      dispatch({
        type: ACTION_CREATOR_TYPES.PENDING,
      })
      const data = await fetcher()

      localStorage.setItem(key, JSON.stringify(data))

      dispatch({
        type: ACTION_CREATOR_TYPES.FETCHED,
        payload: data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: ACTION_CREATOR_TYPES.ERROR,
      })
    }
  }

  function removeCache() {
    localStorage.removeItem(key)
  }

  return {
    data: data as unknown as T,
    isError,
    isLoading,
    refetch,
    removeCache,
  }
}
