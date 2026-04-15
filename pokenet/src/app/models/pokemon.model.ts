export interface Pokemon {
    id: number,
    type: string,
    name: string,
    description: string,
    evolutions?: number[]
}