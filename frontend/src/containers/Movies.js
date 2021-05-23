import React, { Component } from 'react';
import Movie from '../Components/Movie';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const allMovies = gql`
{
    movies{
        name
        genre
        year
    }
}
`

class Movies extends Component {

    render() {
        console.log(this.props)
        let data = this.props.data
        if (data.loading) {
            return <h2>We are loading.....</h2>
        }
        return (
            <div className="movies">
                {data.movies.map((movie) => {
                    return <Movie key=
                        {movie.name}
                        name={movie.name}
                        genre={movie.genre}
                        year={movie.year}
                        image={movie.image} />
                })}
            </div>
        );
    }
}

export default graphql(allMovies)(Movies);
//export default Movies;