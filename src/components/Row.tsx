const base_url = "https://api.themoviedb.org/3";

type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;

};

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
};

  //trailerのoption
type Options = {
    height: string
    width: string;
    playerVars: {
    autoplay: 0 | 1 | undefined;
    };
};

export const Row ({title, fetchUrl, isLargeRow}: Props) =>{
    const[moviess, setMovies] = useState
}