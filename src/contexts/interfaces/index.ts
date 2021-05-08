export interface RequestDiscoverMovie {
    page: number;
    results: DiscoverMovie[];
    total_pages: number;
    total_results: number;
}

export interface DiscoverMovie {
    adult: boolean;
    backdrop_path: string,
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number,
    poster_path: string;
    release_date: string;
    title?: string;
    name?: string;
    video: boolean,
    vote_average: number,
    vote_count: number
}


export interface RequestDetailsMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: Genres[];
    homepage: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
interface Genres {
    id: number;
    name: string;
}
interface ProductionCompanies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}
