import React, {useState} from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Settings from "./Components/Settings/Settings";

function App() {
    let buttons_Start_Reset =[
        {id: "1", height: "100px", width:"100px", backgroundColor:"green",
            content:"start",borderRadius:"100%",onClick:"props.AddValueCounter"},
        {id: "2", height: "100px", width:"100px", backgroundColor:"red",
            content:"reset",borderRadius:"100%",onClick:{ResetCounter}}
            ]
    let max = 5
    let [value,setValue] = useState<number>(0)
    function AddValueCounter() {
        setValue(value += 1)
        if (value === max)
        {

        }
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
            <Header value_counter={value}
                    AddValueCounter={AddValueCounter}
                    ResetCounter={ResetCounter}
                    buttons_Start_Reset={buttons_Start_Reset}/>
            <Settings ChangeStartValue={ChangeStartValue}/>
            <Footer/>

        </div>)


}

export default App;
