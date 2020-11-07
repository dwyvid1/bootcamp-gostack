import { Request, Response } from 'express'

export function helloworld(request: Request, response: Response) {
    return response.json({ message: 'Hello World' })
}