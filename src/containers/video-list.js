import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = ({movieList}) =>{
    
    const movies=["film1", "film2","3" ,"star wars" , "panda"]
    return (
        <div>
            <ul>
                {
                    movies.map(movie => {
                        return <VideoListItem key={movie} movie={movie}/>
                    })
                }
            </ul>

        </div>
    );
}
export default VideoList;