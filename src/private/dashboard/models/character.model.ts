// siempre que veamos objetos compuestos crear una interface
//si vemos que se duplica codigo => separar
export interface ApiLinkedElement {
    name: string;
    link: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Origin extends ApiLinkedElement {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Location extends ApiLinkedElement {}

export interface ApiInfo {
    count: number;
    pager: number;
    next: string;
    prev: string;
}

export interface Character {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: string;
}

export interface CharacterApiResponse {
    info: ApiInfo;
    results: Character[];
}