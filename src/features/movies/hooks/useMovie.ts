import { getMovieById } from "@/features/movies/api/movies.api";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    enabled: Number.isFinite(id),
  });
