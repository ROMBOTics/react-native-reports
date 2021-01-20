import React, { useState } from "react"

const initialReports = {

}

export const ReportsContext = React.createContext(initialReports)

export const RangeContext = React.createContext({
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
}
