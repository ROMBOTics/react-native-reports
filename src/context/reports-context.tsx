import React, { useState } from 'react';
import { RangeTypes } from '../components/range-selector/range-selector.types';

interface State {
  range?: RangeTypes;
  reports?: object;
}

const initialState = {
  range: RangeTypes.month,
  reports: {},
};

export const StateContext = React.createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setState: (_state: State) => {},
});

interface StateContextProviderProps {
  children: React.ReactNode;
}

export const StateContextProvider = (props: StateContextProviderProps) => {
  const [packageState, setPackageState] = useState({
    state: initialState,
    setState: (state: State) => {
      setPackageState({
        ...packageState,
        state: {
          ...packageState.state,
          ...state,
        },
      });
    },
  });

  return (
    <StateContext.Provider value={packageState}>
      {
        // eslint-disable-next-line react/destructuring-assignment
        props.children
      }
    </StateContext.Provider>
  );
};
