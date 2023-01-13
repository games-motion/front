/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react'

enum ACTION_CREATOR_TYPES {
  PENDING,
  ERROR,
  FETCHED,
}

interface IInitialStateProps<T> {
  isLoading: boolean
  isError: boolean
  data: T | null
}

interface IUseFetchReturnProps<T> {
  isLoading: boolean
  isError: boolean
  data: T | null
  refetch: () => Promise<void>
  removeCache: () => void
}

type IActionProps<T> =
  | { type: ACTION_CREATOR_TYPES.PENDING }
  | { type: ACTION_CREATOR_TYPES.ERROR }
  | { type: ACTION_CREATOR_TYPES.FETCHED; payload: T }

const initialState = {
  isLoading: false,
  isError: false,
  data: null,
}

function reducer<K>(state: IInitialStateProps<K>, action: IActionProps<K>) {
  switch (action.type) {
    case ACTION_CREATOR_TYPES.PENDING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ACTION_CREATOR_TYPES.ERROR: {
      return {
        ...state,
        isError: true,
      }
    }
    case ACTION_CREATOR_TYPES.FETCHED: {
      return {
        ...state,
        data: action.payload,
      }
    }
  }
}

export function useFetch<T>(key: string, fetcher: () => Promise<T>): IUseFetchReturnProps<T> {
  const [{ data, isError, isLoading }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    handleRequest()
  }, [])

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
