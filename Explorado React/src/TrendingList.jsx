import Movie from './Movie';

export default function TrendingList(props) {
    return (
        <div className="trending">
            <h2>Trending Now</h2>
            <div className="movie-list">
                {props.movies.map(function (movie, id) {
                    return <Movie key={id} title={movie.title} releaseYear={movie.releaseYear} imageUrl={movie.imageUrl} />;
                })}
            </div>
        </div>
    );
}
