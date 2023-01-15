/* eslint-disable no-unused-vars */
import { Keyframes } from 'styled-components'
import { theme } from '../styles/theme'

export function themeKeyFrames(
  fn: (myTheme: typeof theme) => Keyframes
): (props: { theme: typeof theme }) => Keyframes {
  const keyFrameCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap()

  return ({ theme }) => {
    let result = keyFrameCache.get(theme)

    if (!result) {
      result = fn(theme)
      keyFrameCache.set(theme, result)
    }

    return result
  }
}
