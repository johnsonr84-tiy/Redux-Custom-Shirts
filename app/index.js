import { createStore } from 'redux'
import reducer from './reducer'

const Redux = require('redux')
Redux.createStore

console.log('Hello Shirts')

const store = createStore( reducer, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

const newShirtDiv = document.querySelector('#createShirt')
newShirtDiv.querySelector('#createShirtButton').onclick = () => {
  store.dispatch({
    type: 'SHIRT@ADD',
    color: newShirtDiv.querySelector('#color').value,
    size: newShirtDiv.querySelector('#size').value,
    motto: newShirtDiv.querySelector('#motto').value
  })
}

document.querySelector('#removeButton').onclick = () => store.dispatch({
  type: 'SHIRT@REMOVE',
  id: parseInt(document.querySelector('#id').value)
})

store.subscribe( () => {
console.log("store.getState():", store.getState())
})

// const removeShirtDiv = document.querySelector('#removeShirt')
