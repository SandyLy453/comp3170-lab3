

export default function XButton({ onClick }) {
    return (
        <button className="button" onClick={onClick} aria-label="Close">
            <span className="symbol">&#x2715;</span>
        </button>
    );
}


