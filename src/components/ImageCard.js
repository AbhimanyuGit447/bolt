import React from 'react'
import "./heading.css"

class ImageCard extends React.Component {

    render()
   
{
    const {description, urls, alt_description} = this.props.image;

    return (
        <div >
            <img 
            alt = {description} 
            src = {urls.regular} />
            <p className = "heading">
                {alt_description}
            </p>
            <br></br>
            <br></br>
        </div>
    )
}

}

export default ImageCard
