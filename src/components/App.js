import React from 'react';
import SongList from './SongList';


const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
    );
};

export default App;



// import { selectSong } from '../actions';
// {} - import "named export" ("export const selectSong")
// no {} - import "export default xxx"