import React, {useState} from 'react';

const App = () => {
    //일단 이름을 정한다 복수니까 무비스.
    //{}안에는 함수, 상태값들이 들어간다.
    const [movies, setMovies] = useState([])

    return (
        <div className={"App"}>
            <h1>
                {movies.length}
            </h1>
            {movies.map(movie => (
                <h1>
                    {movie.title}
                </h1>
            ))}
        </div>
    );
};

export default App;