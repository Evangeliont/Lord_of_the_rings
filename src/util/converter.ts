import { CharacterApi, CharacterApiElement, CharacterCustomElement } from "../type/character"
import { QuoteApi, QuoteApiElement, QuoteCustomElement } from "../type/quote"

/** Конвертация серверных данных под клиента */
export const characterConverter = (response: CharacterApi): CharacterCustomElement[] => {
    const convetrData = response.docs.map((el: CharacterApiElement) => {
        return {
            id: el._id,
            birth: el.birth,
            death: el.death,
            gender: el.gender,
            hair: el.hair,
            name: el.name,
            race: el.race,
            realm: el.realm,
            spouse: el.spouse,
            wikiUrl: el.wikiUrl,
            like: false,
        }
    })
    return convetrData.filter(el => el.race === "NaN" ? false : true)
}

/** Конвертация серверных данных под клиента */
export const quoteConverter = (response: QuoteApi): QuoteCustomElement[] => {
    return response.docs.map((el: QuoteApiElement) => ({
        id: el._id,
        dialog: el.dialog,
        movie: el.movie,
        character: el.character
    }))
}