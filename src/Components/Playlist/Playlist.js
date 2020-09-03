import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css'

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        // alert(event.target.value);
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
            <TrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
          </div>
        );
    }
}

export default Playlist;
