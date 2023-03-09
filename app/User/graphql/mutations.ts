import { NewPerson, Person } from "../types"

const addPerson = (_:any, args: NewPerson): Person => {
    const newPerson: Person = {
        id: new Date().toISOString(),
        name: args.name
    }
    console.log('Add person', newPerson)

    return newPerson
}

export default {
    addPerson
}
