import XButton from "./XButton"
import { useState } from "react"

export default function NewsCard({title, author, content, image}) {

    const [isVisible, setIsVisible] = useState(true);

    // Function to handle closing the card
    const closeCard = () => {
        setIsVisible(false);
    };

    // If the card is not visible, don't render anything
    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className="container">
                <XButton onClick={closeCard}/>
                <div className="top">
                    <img src={image} alt="" className="photo" />
                    <div className="top-right">
                        <p className="title">{title}</p>
                        <p className="author">By: {author}</p>
                    </div>
                </div>
                <p>{content}</p>
            </div>
        </>
    )
}


