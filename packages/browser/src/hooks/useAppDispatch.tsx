import { useContext } from 'react';

import { AppDispatchContext } from 'context';
import { AppDispatch } from 'context/types';

const useAppDispatch = (): AppDispatch => useContext(AppDispatchContext);

export default useAppDispatch;
