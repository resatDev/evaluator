import { spawn } from 'redux-saga/effects';

function* welcome() {
  yield 1;
  console.log('AI powered open ended questio evaluator.');
}

function* rootSaga() {
  yield spawn(welcome);
}

export default rootSaga;
