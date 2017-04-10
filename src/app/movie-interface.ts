export interface IMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  //Rating: number;
}

export interface IMovieResults {
  Search: IMovies[];
  totalResults: string;
  Response: string;
}

export interface IAMovie {
  Actors: string
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string
  Rated: string
  Released: string
  Runtime: string
  Title: string
  Type: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
}