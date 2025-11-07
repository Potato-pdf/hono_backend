export const capital_word = (name : string) => {
    const word_lower = name.toLowerCase()
    return word_lower.raplaceAll(/\v\w\g, (char)=> char.toUpperCase())
}