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