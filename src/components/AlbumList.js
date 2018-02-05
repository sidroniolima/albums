import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetial from './AlbumDetail';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { albums: [] };
	}
	componentWillMount()
	{
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState( { albums: response.data }));
	}

	renderAlbums()
	{
		console.log(this.state.albums);
		return this.state.albums.map(album => 
			<AlbumDetail 
				key={album.title}
				album={album}
			/>
		);
	}

	render()
	{
		return (	
        	<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
};

export default AlbumList;