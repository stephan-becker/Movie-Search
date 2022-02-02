import { MovieRating } from "./MovieRating";

export interface MovieInformation {
  Title: string;
  Year: string;
  Rated: string;
  Poster: string;
  Ratings: MovieRating[];
}
