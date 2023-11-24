
//import { BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./Registration";
import React, { useState } from 'react';

function RightPanel(){
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    }
    
    return(
        <article className='RightPanel'>
            <h1>Zapisz się na lekcję Twojego języka!</h1>
            <p>Poniżej formularz</p>
            <p onClick={toggleForm}>{showForm ? 'Ukryj' : 'Pokaż'}</p>
            {showForm && (
                <Registration />
            )}
        </article>
    );
}

export default RightPanel;