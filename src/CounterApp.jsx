import Button from "./components/Button/Button"
import Counter from "./Counter"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import Logs from "./Logs"

const INITIAL_COUNTER_VALUE = 0
const COUNTER_STEP = 1
const MIN_COUNTER_VALUE = -5
const MAX_COUNTER_VALUE = 5
const ACTIONS = {
  PLUS: 'Сложение',
  MINUS: 'Уменьшение'
}

function CounterApp() {
  const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE)
  const [logs, setLogs] = useState([])
 
  function handleMinusBtnClick() {
    const newCounter = counter - COUNTER_STEP
    const log = {
      id: uuidv4(),
      action: ACTIONS.MINUS,
      prevValue: counter,
      value: newCounter,
    }

    setCounter(newCounter)
    setLogs([...logs, log])
  }

  function handlePlusBtnClick() {
    const newCounter = counter + COUNTER_STEP
    const log = {
      id: uuidv4(),
      action: ACTIONS.PLUS,
      prevValue: counter,
      value: newCounter,
    }

    setCounter(newCounter)
    setLogs([...logs, log])
  }

  function isMinusBtnDisabled() {
    return counter <= MIN_COUNTER_VALUE
  }

  function isPlusBtnDisabled() {
    return counter >= MAX_COUNTER_VALUE
  }

  function isCounterOutLimit() {
    return counter >= MAX_COUNTER_VALUE || counter <= MIN_COUNTER_VALUE
  }

    return(
        <div className="container">
      <Counter 
        value={counter}
        isDanger={isCounterOutLimit()}/>

      <Button 
        text={'-'}
        isDisabled={isMinusBtnDisabled()}
        onClick={handleMinusBtnClick}
      />
      <Button 
        text={'+'}
        isDisabled={isPlusBtnDisabled()}
        onClick={handlePlusBtnClick}
      />
      <Logs logs={logs}/> 
    </div>
    )
}

export default CounterApp