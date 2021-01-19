const ChannelBlockSingle = ({item}) =>{
    return(
                <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                           <div className="channels-card-image">
                              <a href="#"><img className="img-fluid" src={`assets/images/icons/${item.images}`} alt="" /></a>
                              <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                           </div>
                           <div className="channels-card-body">
                              <div className="channels-title">
                                 <a href="#">{item.name}</a>
                              </div>
                              <div className="channels-view">
                                 382,323 subscribers
                              </div>
                           </div>
                        </div>
                 </div>
    )
}

export default ChannelBlockSingle;