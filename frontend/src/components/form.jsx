import React from "react";
import { useState } from "react";


const Form = () => {

    //state
    const [data, setData] = useState({
        plato: '',
        precio: '',
        fecha: '',
        color: ''
    });

    //functions

    const handleChangue = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //fecth   
        console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        fetch('http://127.0.0.1/test/backend/api.php', requestOptions)
            .then(response => response.json())
            .then((data) => console.log(data));
    }

    return (
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="card-header">
                        <h4 className="text-center">Agregar Plato</h4>
                    </div>
                
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group mb-2">
                                    <label>Nombre del Plato</label>
                                    <input type="text" name="plato" placeholder="Plato" className="form-control" value={data.plato} onChange={(e) => handleChangue(e)} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-2">
                                    <label>Precio</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <input type="text" className="form-control" name="precio" value={data.precio} onChange={(e) => handleChangue(e)} aria-label="Amount (to the nearest dollar)" />
                                        <span className="input-group-text">.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-2">
                                    <label>Inicio de actividad</label>
                                    <input type="date" name="fecha" className="form-control" value={data.fecha} onChange={(e) => handleChangue(e)} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-2">
                                    <label>Color</label>
                                    <input type="color" name="color" value={data.color} onChange={(e) => handleChangue(e)} className="form-control form-control-color" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="form-group mb-2" style={{float: 'right'}}>
                            <input type="submit" className="btn btn-success btn-md" value="enviar" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form