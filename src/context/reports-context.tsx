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
      {props.children}
    </StateContext.Provider>
  );
};

/* export const RangeContext = React.createContext({
  range: 0,
  setRange: (any) => {}
})

export const RangeContextProvider = (props) => {
  const setRange = (range) => {
    setState({ ...state, range: range })
  }

  const initState = {
    range: 0,
    setRange: setRange
  }

  const [state, setState] = useState(initState)

  return (
    <RangeContext.Provider value={state}>
      {props.children}
    </RangeContext.Provider>
  )
} */
