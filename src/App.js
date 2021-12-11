import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {
    //일단 이름을 정한다 복수니까 무비스.
    //{}안에는 함수, 상태값들이 들어간다.
    const [movies, setMovies] = useState([])


    // 네트워크 함수 생성 네트워크 들어가면 async-await 들어간다
    const getMovies = async () => {
        await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            // .then(services => console.log("++++++++++++++++++++", services.data.results))
            .then(services => {
                setMovies(services.data.results)
            })
            .catch(err => console.log(err.message))
    }

    // 프로젝트 시작시 무조건 실행되는 부분.
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className={"App"}>
            <h1>
                {movies.length}
            </h1>
            {movies.map(movie => (
                <h1>
                    {movie.name}
                </h1>
            ))}
        </div>
    );
};

export default App;