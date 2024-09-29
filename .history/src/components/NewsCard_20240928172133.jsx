import XButton from "./XButton"
import { useState } from "react"

export default function NewsCard({title, author, content, image, link}) {

    const [isVisible, setIsVisible] = useState(true);

    // Function to handle closing the card
    const closeCard = () => {
        setIsVisible(false);
    };

    // If the card is not visible, don't render anything
    if (!isVisible) {
        return null;
    }

    const limitContent = (text, wordLimit) => {
        const words = text.split(' ');  // Split the content into words
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';  // Join the first 100 words and add '...'
        }
        return text;  // If content has less than 100 words, return as is
    };

    return (
        <>
            <div className="container">
                <XButton onClick={closeCard}/>
                <div className="top">
                    <img src={image} alt="" className="photo" />
                    <div className="info">
                        <p className="title">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {title}
                            </a>
                        </p>
                        <p className="author">By: {author}</p>
                    </div>
                </div>
                <p className="content">{limitContent(content, 100)}</p>
            </div>
        </>
    )
}


