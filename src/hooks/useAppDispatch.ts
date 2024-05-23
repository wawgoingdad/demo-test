

import { AppDispatch, AppState } from '../stores/store'
import { EqualityFn, shallowEqual, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(selector: (state: AppState) => T, equalityFn?: EqualityFn<T>) => {
    return useSelector<AppState, T>(selector, equalityFn || shallowEqual);
};
