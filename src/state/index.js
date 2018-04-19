import { createStore as reduxCreateStore } from "redux"
import reducer from './reducer';

const initialState = {
  currentNav: 'home',
  banner: '',
  aboutMe: '',
  education: [],
  workHistory: [],
  skills: [],
  testimonials: []
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore