const CategoryBlockSingle = ({item}) => {
    return(
        <div className="col-xl-3 col-sm-6 mb-3">
        <div className="category-item mt-0 mb-0">
           <a href="/">
              <img className="img-fluid" src={`assets/images/icons/${item.images}`} alt="" />
              <h6>{item.name} <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></h6>
              {/* <p>74,853 views</p> */}
           </a>
        </div>
     </div>
    )
}

export default CategoryBlockSingle;