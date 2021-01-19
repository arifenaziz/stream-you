import React,{ useState } from "react";
import CategoryBlockSingle from "./CategoryBlockSingle/CategoryBlockSingle";

const CategoryBlock = () => {

    const[listCategory,SetListCategory]=useState([
        {
            'name':'Traveling',
            'images':'travel.jpg'
        },
        {
            'name':'Technology',
            'images':'technology.jpg'
        },
        {
            'name':'Lifestyle',
            'images':'lifestyle.jpg'
        },
        {
            'name':'Health',
            'images':'health.jpg'
        },
        {
            'name':'Gaming',
            'images':'gaming.jpg'
        },
        {
            'name':'Education',
            'images':'education.jpg'
        },
        {
            'name':'Documentry',
            'images':'documentry.jpg'
        },
        {
            'name':'Cooking',
            'images':'cooking.jpg'
        },
        {
            'name':'Comedy',
            'images':'comedy.jpg'
        }
    ]);

    return(
        <div className="video-block section-padding">
        <div className="row">
           <div className="col-md-12">
              <div className="main-title">
              <h6>Categories</h6>
              </div>
            </div>

        {
            listCategory.map((item,index)=>(
                <CategoryBlockSingle item={item} key={index}/>
            ))
        }


        </div>
        </div>
    )
}

export default CategoryBlock;