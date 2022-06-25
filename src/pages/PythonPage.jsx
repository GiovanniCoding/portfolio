import { useNavigate } from "react-router-dom"

export const PythonPage = () => {

    const navigate = useNavigate();

    const handleShortener = () => {
        navigate('/python/shortener');
    }

    return (
        <>
            <h1>PythonPage</h1>
            <button
                onClick={ handleShortener }
            >
                shortener
            </button>
        </>
    )
}
