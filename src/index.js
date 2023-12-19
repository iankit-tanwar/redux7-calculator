import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



let rootReducer = (preState, action) => {
  let newState = preState;


  switch (action.type) {

    case 'ADDITION':
      //alert("addition")
      newState.operator = '+'
      break;
    case 'SUBTRACTION':
      //alert("SUBTRACTION")
      newState.operator = '-'
      break;
    case 'MULTIPLICATION':
      // alert('MULTIPLICATION')
      newState.operator = '*'
      break;
    case 'DIVISION':
      //alert('DIVISION')
      newState.operator = '/'
      break;
    case 'RESULT':


      switch (newState.operator) {
        case '+':
          newState.result = newState.leftValue + newState.rightValue
          break;
        case '-':
          newState.result = newState.leftValue - newState.rightValue
          break;
        case '*':
          newState.result = newState.leftValue * newState.rightValue
          break;
        case '/':
          newState.result = newState.leftValue / newState.rightValue
          break;
      }

      break;
    case 'CLEAR':
      // alert('CLEAR')
      newState.result = 0
      newState.leftValue = ''
      newState.rightValue = ''
      newState.operator = ''
      
      break;

    case 'NUMBER':
      // alert(action.number)

      console.log(newState)

      if (newState.operator === '') {
        if (newState.leftValue === '') {
          newState.leftValue = action.number
        } else {
          //concatination

          newState.leftValue = parseInt(newState.leftValue + action.number)
          console.log(typeof newState.leftValue)

        }
      } else {
        if (newState.operator === '') {
          newState.rightValue = action.number
        } else {
          newState.rightValue = parseInt(newState.rightValue + action.number)
        }

      }

      break;
  }

console.log(newState.result)
  return newState;
}

export const number = (n) => {

  return {
    type: 'NUMBER',
    number: n
  }
}

const storeObj = createStore(rootReducer, {
  result: 0,
  leftValue: '',
  operator: '',
  rightValue: ''
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeObj}>
      <App />

    </Provider>
  </React.StrictMode>
);


