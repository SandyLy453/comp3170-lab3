import XButton from "./XButton"

export default function NewsCard({title, author, content, image}) {
    return (
        <>
            <div className="container">
                <XButton/>
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


