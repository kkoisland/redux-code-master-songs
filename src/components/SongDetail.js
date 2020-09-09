import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song){
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>           
        </div>
    )
;}

// const SongDetail = (props) => {
//     console.log(props); //"props" include "song"
//     return <div>Song Detail</div>;
// ;}

const mapStateToProps = (state) => {
   return  { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);