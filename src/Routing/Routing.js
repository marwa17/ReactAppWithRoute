import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../components/HomePage/index.js";
import DetailsPage from "../components/DetailsPage/index.js";
import ExercisePage from "../components/ExercisePage/index.js";
import NotFoundPage from "../components/NotFoundPage/index.js";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<ExercisePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
