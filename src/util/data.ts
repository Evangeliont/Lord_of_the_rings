import { ToastOptions } from "react-toastify"
import { DataRace, Toast } from "../type"

export const arrayOfSorts = [
    { result: "asc", value: "По возрастанию" },
    { result: "desc", value: "По убыванию" }
]

export const arrayRace: DataRace[] = [
    { value: 'Hobbit', active: false, id: 1 },
    { value: 'Human', active: false, id: 2 },
    { value: 'Elf', active: false, id: 3 },
    { value: 'Dwarf', active: false, id: 4 },
    { value: 'Ent', active: false, id: 5 },
    { value: 'Orc', active: false, id: 6 },
    { value: 'Troll', active: false, id: 7 }
]

export const toastInfo: ToastOptions<Toast> = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}