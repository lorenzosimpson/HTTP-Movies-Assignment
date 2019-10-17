import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie)

    useEffect(() => {
        const movieToEdit = props.movies.find(movie => `${movie.id}` === props.match.params.id)

        if (movieToEdit) setMovie(movieToEdit)

    }, [])

    

    return (
        <form>
            <input type='text' name='title'></input>
            <input type='text' name='director'></input>
            <input type='number' name='metascore'></input>
            <button>Update Movie</button>
        </form>
    )
}

export default UpdateMovie;