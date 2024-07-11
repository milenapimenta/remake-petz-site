import { Route, Routes } from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/HomePage';
function AppRouter() {
    return (
       <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
            </Route>
       </Routes>
    )
}

export default AppRouter;