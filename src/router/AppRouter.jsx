import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PythonPage } from "../pages/PythonPage";
import Shortener from "../projects/python/shortener/Shortener";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/python" element={<PythonPage />} />
                <Route path='/python/shortener' element={<Shortener />}/>
            </Routes>
        </>
    )
}
