import React from 'react';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow"
import TunedOutlinedIcon from "@material-ui/icons/TuneOutlined";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TunedOutlinedIcon />
                <h2>FILTER</h2>
                </div>
            <hr />
            
            
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLQOc0cCDSOZTH58A27GDWUlaoaq-h_loyNQPhRV4Q=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Flying Beast"
            verified
            subs="6.03M"
            noOfVideos={836}
            description="6 Million Celebration"
            />
            
            <hr/>
            <VideoRow
            views="1.4M"
            subs="6.03M"
            description="lovely day of live session"
            timestamp="59 seconds ago"
            channel="Flying Beast"
            title="Buying a new car"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLdxFFwzfDFt4mvVZFrAZUB8MKKbN77lHZg&usqp=CAU" 
            />
        
        </div>
        
    )
}

export default SearchPage
