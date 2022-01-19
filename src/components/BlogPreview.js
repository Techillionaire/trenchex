

const BlogPreview = () => {
    return (
        <div className="blogPreview">
            <div className="blogContainer">
                <div class="card shadow-sm w-auto rounded blogCard">
                    <div class="card-body row">
                        <div className="col">
                            <img src="https://upload.wikimedia.org/wikipedia/en/c/c2/Wizkid_-_Made_in_Lagos.png" className='blogImg img-fluid'/>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-9">
                                    <h3>Blog Title</h3>
                                </div>
                                <div className="col-3">
                                    <i class="fas fa-user-circle" />    
                                </div>
                            </div>
                            
                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <a href="#">Read more...</a> </p>
                            <div className="row">
                                <div className="col-8">
                                    -Jan-19-2022
                                </div>
                                <div className="col-4">
                                    <i class="fas fa-heart fav" />
                                    <i class="fas fa-share-alt share" />
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>

            </div>
        </div>
    )
}

export default BlogPreview
