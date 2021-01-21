import React, { useState } from 'react';
import { RangeTypes } from '../components/range-selector/range-selector.types';

interface state {
  range?: RangeTypes;
  reports?: object;
}

const initialState = {
  range: RangeTypes.month,
  reports: {},
};

export const StateContext = React.createContext({
  state: initialState,
  setState: (state: state) => {},
});

interface StateContextProviderProps {
  children: React.ReactNode;
}

export const StateContextProvider = (props: StateContextProviderProps) => {
  const setState = (state: state) => {
    setPackageState({
      ...packageState,
      state: {
        ...packageState.state,
        ...state,
      },
    });
  };

  const [packageState, setPackageState] = useState({
    state: initialState,
    setState: setState,
  });

  return (
    <StateContext.Provider value={packageState}>
      {props.children}
    </StateContext.Provider>
  );
};

/*export const RangeContext = React.createContext({
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
}*/
