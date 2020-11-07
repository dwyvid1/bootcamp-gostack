import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloworld(request: Request, response: Response) {
    const user = createUser({
        email: 'deyvid.example.com.br',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS', 
            'React Native',
            { title: 'JavaScript', experience: 20},
        ]
    })

    return response.json({ message: 'Hello World' })
}