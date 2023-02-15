import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        carrera: "",
        turno: "",
        sede: "",
        celular: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getFirestore();
        await addDoc(collection(db, "registros"), formData);
        setFormData({
            nombre: "",
            carrera: "",
            turno: "",
            sede: "",
            celular: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="carrera"
                id="carrera"
                placeholder="carrera"
                value={formData.carrera}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="turno"
                id="turno"
                placeholder="turno"
                value={formData.turno}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sede"
                id="sede"
                placeholder="sede"
                value={formData.sede}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="celular"
                id="celular"
                placeholder="celu (opcional)"
                value={formData.celular}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    );
};

export default Form;
