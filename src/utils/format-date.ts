import { format } from 'date-fns'

/**
 * @param { string } date - Date to format
 * @param { string } formatStyle - Format style
 * @returns {string} Date formatted
 * @example formatDate("2023-01-12T23:39:07Z",'dd/MM/yyyy')
 * @returns 12/01/2023
 */
export function formatDate(date: string, formatStyle: string): string {
  return format(new Date(date), formatStyle)
}
