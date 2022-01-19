import React from 'react'
import BlogPreview from './BlogPreview'
import ChatPreview from './ChatPreview'
import ShopPreview from './ShopPreview'

const Main = () => {
    return (
        <div className="row">
            <div className="col-md-4 shopPreview">
                <ShopPreview />
            </div>

            <div className="col-md-5">
                <BlogPreview />
            </div>
                
            <div className="col-md-3">
                <ChatPreview />
            </div>
        </div>
    )
}

export default Main
