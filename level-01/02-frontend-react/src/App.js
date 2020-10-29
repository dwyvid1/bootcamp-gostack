import React from 'react'

import Header from './components/Header'

/**
 * Componentes;
 * Propriedade;
 * Estado
 */

function App() {
    return (
        // Fragment: Quando vocẽ precisa agrupar o componente, porém não deseja sujar a DOM.
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>

            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
       
    )
        

}

export default App