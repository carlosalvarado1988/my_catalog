import { get, set, remove } from 'local-storage'

const SUFFIX: { exp: '[exp]' } = { exp: '[exp]' }

// If it has expired, return null; if it doesn't exist, it should be undefined
export const lsGet = (key: string): string => {
  const value = get<number>(`${key}${SUFFIX.exp}`)
  const current = Math.floor(Date.now() / 1000)
  if (value && current < value) {
    return get<string>(key)
  }
  // Has expired, return an empty string.
  return ``
}

// If there is previous exp and it is passed, overwrite, otherwise return false
export const lsSet = (
  key: string,
  val: string | number,
  exp: number,
): boolean => {
  const current = Math.floor(Date.now() / 1000)
  if (exp > current) {
    return set(key, val) && set(`${key}${SUFFIX.exp}`, exp)
  }
  return false
}

export const lsDel = (key: string): boolean => {
  remove(key)
  remove(`${key}${SUFFIX.exp}`)
  return true
}
