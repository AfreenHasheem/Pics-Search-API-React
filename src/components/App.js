import React from 'react';
import {getPicture} from '../api/unsplash'

import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: [], access_token: 'ff14e58ac546d849ea03a9a11ea6f74e15abb607890a10779cff223f46cb499d' };

    onSearchSubmit = async (searchTerm) => {
        const response = await getPicture(this.state.access_token, searchTerm);
       this.setState({images : response.data.results});
    };
    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    } 
}

export default App;


