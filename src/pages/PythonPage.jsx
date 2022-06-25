import { useNavigate } from "react-router-dom"

export const PythonPage = () => {

    const navigate = useNavigate();

    const handleShortener = () => {
        navigate('/python/shortener');
    }

    return (
        <>
            <div>PythonPage</div>
            <button
                onClick={ handleShortener }
            >
                shortener
            </button>
        </>
    )
}
