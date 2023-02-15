import { getFirestore, getDocs, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";

const Table = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB_LvSc3rPt0oVPWrDRJ8qNrSnjhrbNUwo",
        authDomain: "encontrarfacuamigos.firebaseapp.com",
        projectId: "encontrarfacuamigos",
        storageBucket: "encontrarfacuamigos.appspot.com",
        messagingSenderId: "909393743886",
        appId: "1:909393743886:web:38e5ecce33062ffb59ec5f",
        measurementId: "G-G864B18CB1",
    };

    initializeApp(firebaseConfig);

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const querySnapshot = collection(db, "registros");
        getDocs(querySnapshot).then((response) => {
            const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setRegistros(data);
        });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Turno</th>
                    <th>Sede</th>
                    <th>Celular</th>
                </tr>
            </thead>
            <tbody>
                {registros.map((registro) => (
                    <tr key={registro.id}>
                        <td>{registro.nombre}</td>
                        <td>{registro.carrera}</td>
                        <td>{registro.turno}</td>
                        <td>{registro.sede}</td>
                        <td>{registro.celular ? registro.celular : "N/A"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
