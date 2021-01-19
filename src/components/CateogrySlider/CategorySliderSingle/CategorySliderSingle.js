import React from 'react';
const CategorySliderSingle = ({item}) => {
    return (
    <div className="item">
        <div className="category-item">
           <a href="#">
              <img className="img-fluid" src={`assets/images/icons/${item.images}`} alt="" />
              <h6>{item.name}</h6>
              <p>74,853 views</p>
           </a>
        </div>
     </div>
    )
}

export default CategorySliderSingle;