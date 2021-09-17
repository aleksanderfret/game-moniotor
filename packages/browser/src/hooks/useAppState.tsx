import { useContext } from 'react';

import { AppStateContext } from 'context';
import { AppState } from 'context/types';

const useAppState = (): AppState => useContext(AppStateContext);

export default useAppState;
