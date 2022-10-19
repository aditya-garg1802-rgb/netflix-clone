import React from 'react';
import './styles.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

function FeaturedMovie({ item }) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }
    let description = item.overview.length > 200 ? item.overview.substring(0, 200) + '...' : item.overview;

    return (
        <section
            className="featured"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}
        >
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>

                    <div className="featured--info">
                        <div className="featured--points">{Math.floor(item.vote_average)} Points</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                    </div>

                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a disabled className="featured--watchbutton"><div><PlayArrowIcon /> Watch</div></a>
                        <a disabled className="featured--mylistbutton"><div><AddIcon />My List</div></a>
                    </div>
                    <div className="featured--genres"><strong>Genres:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;
