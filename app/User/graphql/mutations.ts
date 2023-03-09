import { NewPerson, Person } from "../types"
import people from "../dataset"

const addPerson = (_:any, args: NewPerson): Person => {
    const newPerson: Person = {
        id: new Date().toISOString(),
        name: args.name
    }
    people.push(newPerson)

    return newPerson
}

export default {
    addPerson
}
