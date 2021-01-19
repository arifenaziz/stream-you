const VideoSingle = () => {
    return(
        <div className="video-block section-padding">
        <div className="row">

        <div className="col-md-12">

        <div className="single-video-left">
         <div className="single-video">

         <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>


        <div className="single-video-title box mb-3">
                              <h2><a href="#">Travel with Me</a></h2>
                              <p className="mb-0"><i className="fas fa-eye"></i> 2,729,347 views</p>
                           </div>
                           <div className="single-video-author box mb-3">
                              {/* <div className="float-right"><button className="btn btn-danger" type="button">Subscribe <strong>1.4M</strong></button> <button className="btn btn btn-outline-danger" type="button"><i className="fas fa-bell"></i></button></div> */}
                              <img className="img-fluid" src="/assets/images/icons/travel.jpg" alt="" />
                              <p><a href="#"><strong>Travel with me</strong></a> <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></p>
                              <small>Published on Aug 10, 2018</small>
        </div>



        </div>

        </div>

        </div>
        </div>
    )
}

export default VideoSingle;