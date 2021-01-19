import React,{ useState } from "react";
import ChannelBlockSingle from "./ChannelBlockSingle/ChannelBlockSingle";

const ChannelBlock = () => {

    const[listChannel,SetListChannel]=useState([
        {
            'name':'Travel with me',
            'images':'travel.jpg'
        },
        {
            'name':'Techno Bangla',
            'images':'technology.jpg'
        },
        {
            'name':'My Lifestyle',
            'images':'lifestyle.jpg'
        },
        {
            'name':'Health and Secure',
            'images':'health.jpg'
        },
        {
            'name':'Gaming World',
            'images':'gaming.jpg'
        },
        {
            'name':'Education Universe',
            'images':'education.jpg'
        },
        {
            'name':'Documentry',
            'images':'documentry.jpg'
        },
        {
            'name':'My Cooking show',
            'images':'cooking.jpg'
        },
        {
            'name':'Comedy Calculas',
            'images':'comedy.jpg'
        }
    ]);

    return(
        <div className="video-block section-padding">
        <div className="row">
           <div className="col-md-12">
              <div className="main-title">
              <h6>Channels</h6>
              </div>
            </div>

        {
            listChannel.map((item,index)=>(
                <ChannelBlockSingle item={item} key={index}/>
            ))
        }


        </div>
        </div>
    )
}

export default ChannelBlock;