import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'



const rootReducers = combineReducers( { } )

const storeFactory = () => {
  const middleware = [thunk]

  const reduxStore = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return reduxStore
}

export default  storeFactory