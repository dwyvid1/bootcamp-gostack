import React, { useState } from 'react'

import Header from './components/Header'

/**
* Componentes;
* Propriedade;
* Estado & Imutabilidade
* 
* <> </> Fragment: Quando vocẽ precisa agrupar os componentes, porém não deseja sujar a DOM.
*/

// useSatate retorna um array com 2 posições
//    
// 1. Variável com o seu valor inicial
// 2. Função para atualizarmos esse valor

// ...projects = copiando o que está em projects.

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Desenvolvimento Front-end'])

    function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`)

        setProjects([...projects, `Novo projeto ${Date.now()}`])
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar</button>
        </>  
    )    
}

export default App