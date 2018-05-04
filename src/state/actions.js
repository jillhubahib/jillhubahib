/*
 * action types
 */
export const SET_CURRENT_NAV = 'SET_CURRENT_NAV'
export const SET_BANNER = 'SET_BANNER'
export const SET_ABOUT_ME = 'SET_ABOUT_ME'
export const SET_EDUCATION = 'SET_EDUCATION'
export const SET_WORK_HISTORY = 'SET_WORK_HISTORY'
export const SET_TESTIMONIALS = 'SET_TESTIMONIALS'
export const SET_SKILLS = 'SET_SKILLS'
export const SET_WORKS = 'SET_WORKS'

/*
 * other constants
 */

/*
 * action creators
 */
export function setCurrentNav(section) {
  return {
    type: SET_CURRENT_NAV,
    payload: section,
  }
}
