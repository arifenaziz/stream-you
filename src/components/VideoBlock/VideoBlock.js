import React,{ useState } from "react";
import VideoBlockSingle from "./VideoBlockSingle/VideoBlockSingle"

const VideoBlock = () => {


    const[listVideo,SetListVideo]=useState([
        {
            'title':'How to code in javascript',
            'images':'code.jpg',
            'channel_name':'Channel Name Code',
            'slug':'101010'
        },
        {
            'title':'Indian most delicious food',
            'images':'food.jpg',
            'channel_name':'Channel Name Fooddy',
            'slug':'101011'            
        },
        {
            'title':'Kids playing with water',
            'images':'fun.jpg',
            'channel_name':'Channel Name FunTo',
            'slug':'101012'               
        },
        {
            'title':'FIFA 21 Gameplay',
            'images':'gaming.jpg',
            'channel_name':'Channel Name GameUnder',
            'slug':'101013'              
        },
        {
            'title':'Medicine side effects ',
            'images':'health.jpg',
            'channel_name':'Channel Name MedicineWay',
            'slug':'101014'             
        },
        {
            'title':'Best tips to win bicycle racing',
            'images':'sports.jpg',
            'channel_name':'Channel Name BicycleWorld',
            'slug':'101015'            
        },
        {
            'title':'How you can study more',
            'images':'study.jpg',
            'channel_name':'Channel Name StudyMore',
            'slug':'101016'             
        },
        {
            'title':'Lets travel the world',
            'images':'travel.jpg',
            'channel_name':'Channel Name LetsGO',
            'slug':'101017'              
        }
    ])

    return(
        <div className="video-block section-padding">
          <div className="row">

            {listVideo.map((item,index)=>(
                <VideoBlockSingle item={item} key={index}/>
            ))}

          </div>
        </div>
    )
}

export default VideoBlock;