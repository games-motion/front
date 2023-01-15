export enum ACTION_CREATOR_TYPES {
  PENDING,
  ERROR,
  FETCHED,
}
export interface IInitialStateProps<T> {
  isLoading: boolean
  isError: boolean
  data: T | null
}

export type IActionProps<T> =
  | { type: ACTION_CREATOR_TYPES.PENDING }
  | { type: ACTION_CREATOR_TYPES.ERROR }
  | { type: ACTION_CREATOR_TYPES.FETCHED; payload: T }

export const initialState = {
  isLoading: false,
  isError: false,
  data: null,
}

export function reducer<K>(state: IInitialStateProps<K>, action: IActionProps<K>) {
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
