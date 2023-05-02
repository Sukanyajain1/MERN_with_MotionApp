import React from 'react';

const Films = (props) => {
    let {searchResults} = props;

    return (
        <>
            <div>
                <h1>{searchResults.title}</h1><br />
                <h3><strong>Episode ID: </strong>{searchResults.episode_id}</h3>
                <h3><strong>Director: </strong>{searchResults.director}</h3>
                <h3><strong>Producer: </strong>{searchResults.producer}</h3>
                <h3><strong>Opening Crawl: </strong></h3>
                <h3><em>"{searchResults.opening_crawl}"</em></h3>
            </div>
        </>
    );
}

export default Films;