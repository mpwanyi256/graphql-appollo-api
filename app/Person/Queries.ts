import people from "./dataset"
import { Person, getPersonQueryInput } from "./types"

const getAllPeople = () => [...people]

const getPerson = (_: any, args: getPersonQueryInput): Person | undefined => {
    const { id } = args
    return people.find((person) => person.id === id);
}

export default {
    getAllPeople,
    getPerson
}
