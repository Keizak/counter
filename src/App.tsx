import React, {useState} from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Settings from "./Components/Settings/Settings";

function App() {

    let [value,setValue] = useState<number>(0)
    function AddValueCounter() {
        setValue(value += 1)
    }
    function ResetCounter() {
        setValue(0)
    }
    function ChangeMaxValue() {
    }
    function ChangeStartValue(startvalue:number) {
        setValue(startvalue)
    }
    return (
        <div className={style.App}>
            <Header value_counter={value}/>
            <Settings
                AddValueCounter={AddValueCounter}
                ResetCounter={ResetCounter}
                ChangeStartValue={ChangeStartValue}/>
            <Footer/>

        </div>)


}

export default App;
