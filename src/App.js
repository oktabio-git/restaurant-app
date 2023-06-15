import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Fridge from "./components/Fridge";
import "./App.css";
import React from "react";
import categories from "./categories.json";
import units from "./units.json";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/fridge" element={<Fridge></Fridge>}></Route>
                <Route path="/*" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

/*
Categorias:
Id, Nombre
Medidas:
Id, Nombre
Ingredientes:
Id, Nombre, Id_categoría, Cantidad, Id_medida
*/

// Investigar estandares de organización de proyectos de React.
// Atomicidad, granualidad. << Formación de los componentes.
// Clase abstracta poo react.
// Formulario que refleje el contenido registrado.
// Que sea reactivo, hookforms.
