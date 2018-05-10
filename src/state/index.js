import { createStore as reduxCreateStore } from 'redux'
import reducer from './reducer'

const initialState = {
  currentNav: '',
  banner: '',
  aboutMe: '',
  education: [],
  workHistory: [],
  skills: [],
  testimonials: [],
  works: [],
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
