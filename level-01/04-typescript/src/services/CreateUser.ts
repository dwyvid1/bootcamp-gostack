/**
 * Para criar: name, email, password
 */

interface techObject {
    title: string,
    experience: number
}

interface CreateUserData {
    name?: string,
    email: string,
    password: string,
    techs: Array<string | techObject> // string[]
}

export default function({ name = '', email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user
}