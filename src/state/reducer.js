import {
  SET_CURRENT_NAV,
  SET_BANNER,
  SET_ABOUT_ME,
  SET_EDUCATION,
  SET_WORK_HISTORY,
  SET_TESTIMONIALS
} from './actions'

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_NAV:
      return {...state, currentNav: action.payload }
    case SET_BANNER:
      return {...state, banner: action.payload }
    case SET_ABOUT_ME:
      return {...state, aboutMe: action.payload }
    case SET_EDUCATION:
      return {...state, education: action.payload }
    case SET_WORK_HISTORY:
      return {...state, workHistory: action.payload }
    case SET_TESTIMONIALS:
      return {...state, testimonials: action.payload }
    default:
      return state
  }
}