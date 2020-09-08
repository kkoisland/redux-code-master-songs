import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });

    }
    render() {
        return <div className="ui devided list">{this.renderList()}</div>;
        //this.props === { songs: state.songs }
        // console.log(this.props);
        // console.log(this.props.songs);
        //return <div>SongList</div>
    }
}

const mapStateToProps = (state) => { // name doesn't matter   
    console.log(state);
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
// === selectSong: selectSong

// #1. These 2 are exactly same
// import React from 'react';
// class SongList extends React.Component {
// }

// import React, { Component } from 'react';
// class SongList extends Component {
// }

// #2. The following is valid
// function connect() {
//     return function(){
//         return 'Hi there!';
//     }
// }
// connect()()