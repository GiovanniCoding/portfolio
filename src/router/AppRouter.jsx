import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PythonPage } from "../pages/PythonPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/python" element={<PythonPage />} />
            </Routes>
        </>
    )
}
