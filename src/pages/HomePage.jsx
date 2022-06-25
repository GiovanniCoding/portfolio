import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navigate = useNavigate();

  const handlePython = () => {
    console.log('Navigate');
    navigate('/python');
  }

  return (
    <>
        <h1>HomePage</h1>
        <button
          onClick={ handlePython }
        >
          Python
        </button>
    </>
  )
}
