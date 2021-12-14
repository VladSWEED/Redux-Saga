import { put, takeEvery, call, takeLeading, fork, spawn, join } from 'redux-saga/effects';

const getItem = async (number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${number}`
  );
  const data = response.json();
  return data;
};

const getItems = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/'
  );
  const data = response.json();
  return data;
};

export function* firstItem() {
  const item1 = yield call(getItem, '22');
  yield put({ type: 'SET_ITEM1', payload: item1 });
}

export function* secondItem() {
  const item2 = yield call(getItem, '45');
  yield put({ type: 'SET_ITEM2', payload: item2 });
  throw new Error();
}
export function* allItems() {
  const items = yield call(getItems);
  yield put({ type: 'SET_ITEMS', payload: items });
  return items;
}

export function* workerSaga() {
  const items = yield spawn(allItems);
  yield fork(firstItem);
  console.log('items:', items);
  yield spawn(secondItem);
  console.log('before join')
  yield join(items)
  console.log('after join')
}

export function* watchClickSaga() {
  yield takeEvery('CLICK', workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
