import React from 'react'

import Header from './components/Header'

function App() {
    return (
        // Fragment: Quando vocẽ precisa agrupar o componente, porém não deseja sujar a DOM.
        <>
            <Header />
            <Header />
        </>
       
    )
        

}

export default App