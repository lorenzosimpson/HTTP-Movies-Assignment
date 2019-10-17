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
        console.log(props, 'update movie props')
        if (movieToEdit) setMovie(movieToEdit)
        console.log(movieToEdit)

    }, [props.items, props.match.params.id])

    const handleChanges = e => {
        if (e.target.name === 'stars') {
            setMovie({
                ...movie,
                stars: e.target.value.split(',')
            })
        } else {
            setMovie({
                ...movie,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitForm = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
            console.log(res)
            props.history.push(`/movies/${res.data.id}`)
        })
        .catch(err => console.log(err))
    }

console.log(movie)
    return (
        <form onSubmit={submitForm}>
            <input type='text' name='title' value={movie.title} onChange={handleChanges}></input>
            <input type='text' name='director' value={movie.director} onChange={handleChanges}></input>
            <input type='number' name='metascore' value={movie.metascore} onChange={handleChanges}></input>
            <input type='text' name='stars' value={movie.stars.join()} onChange={handleChanges}></input>
            
            <button>Update Movie</button>
        </form>
    )
}

export default UpdateMovie;