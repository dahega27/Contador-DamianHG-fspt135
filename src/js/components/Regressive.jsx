import React from 'react'
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import { Popover } from 'bootstrap';


export const Regresive = (props) => {
    const regCuadros = props.number.toString().padStart(6, "0").split("");
    return (
        <>
            <h1 className="d-flex justify-content-center">Regresive</h1>
            <div className="d-flex justify-content-center" style={{ marginTop: '2rem' }}>
                <i class="fa-solid fa-clock"
                    style={{
                        fontSize: '4rem'
                    }}
                ></i>
                {regCuadros.map((digito, index) => (

                    <div
                        key={index}
                        className="mx-1"
                        style={{
                            backgroundColor: "rgb(247, 160, 160)",
                            color: "white",
                            padding: "10px 15px",
                            borderRadius: "5px",
                            fontSize: "2rem",
                        }}
                    >
                        {digito}
                    </div>
                ))}
                <input type='number' className="form-control"
                    placeholder="Set timer"
                    onChange={(e) => props.change(e.target.value)}
                    style={{
                        marginLeft: '1rem',
                        fontSize: "2rem",
                        width: '12rem'
                    }} />
                <button type="submit" onClick={props.play} style={{
                    backgroundColor: "rgb(152, 33, 33)",
                    color: "white",
                    fontSize: "2rem",
                    border: 'solid 2px gray',
                    marginLeft: '1rem'
                }}><i class="fa-solid fa-play"></i></button>
                <button onClick={props.stop} style={{
                    backgroundColor: "rgb(152, 33, 33)",
                    color: "white",
                    fontSize: "2rem",
                    border: 'solid 2px gray'
                }}><i class="fa-solid fa-pause"></i></button>
                <button onClick={props.reload} style={{
                    backgroundColor: "rgb(152, 33, 33)",
                    color: "white",
                    fontSize: "2rem",
                    border: 'solid 2px gray'
                }}><i class="fa-solid fa-arrow-rotate-right"></i></button>
            </div>

        </>
    )
};

Regresive.PropTypes = {
    number: PropTypes.number,
    change: PropTypes.number,
    play: PropTypes.func,
    stop: PropTypes.func,
    reload: PropTypes.func,
}