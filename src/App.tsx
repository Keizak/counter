import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/counter";

function App() {

    let [error,setError] = useState<string | null>(null)
    let [value, setValue] = useState(0)
    let [maxcount, setMaxcount] = useState(5)


    let ButtonGo = () => {
        value += 1
        setValue(value)
        if (value === maxcount)
        {
            setError('Максимальное значение');
        }

    }
    let ButtonReset = () => {
        setValue(0)
        setError('')
    }
    let SetMax = (event: ChangeEvent<HTMLInputElement>) => {
        let max = event.currentTarget.value
        setMaxcount(Number(max))
    }
  return (
    <div className="App">
      <Counter
        SetMax = {SetMax}
        maxcount ={maxcount}
        value = {value}
        error = {error}
        ButtonGo = {ButtonGo}
        ButtonReset= {ButtonReset} />
    </div>
  );
}

export default App;
