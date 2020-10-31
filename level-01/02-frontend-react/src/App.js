import React, { useState, useEffect } from 'react'

import api from './services/api'

import './App.css'

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
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`])

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Deyvid Nascimento"
        })

        const project = response.data

        setProjects([...projects, project])
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar</button>
        </>  
    )    
}

export default App