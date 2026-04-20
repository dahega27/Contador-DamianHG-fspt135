import React from 'react'
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


export const Contador = (props) => {
    const cuadros = props.number.toString().padStart(6, "0").split("");
    return (
        <div className="d-flex justify-content-center" style={{ margin: '4rem' }}>
            <i class="fa-solid fa-clock"
                style={{
                    fontSize: '4rem'
                }}></i>
            {cuadros.map((digito, index) => (

                <div
                    key={index}
                    className="mx-1"
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        fontSize: "2rem",
                    }}
                >
                    {digito}
                </div>
            ))}
            <button onClick={props.play} style={{
                backgroundColor: "rgb(46, 46, 46)",
                color: "white",
                fontSize: "2rem",
                border: 'solid 2px gray',
                marginLeft: '1rem'
            }}><i class="fa-solid fa-play"></i></button>
            <button onClick={props.stop} style={{
                backgroundColor: "rgb(46, 46, 46)",
                color: "white",
                fontSize: "2rem",
                border: 'solid 2px gray'
            }}><i class="fa-solid fa-pause"></i></button>
            <button onClick={props.reload} style={{
                backgroundColor: "rgb(46, 46, 46)",
                color: "white",
                fontSize: "2rem",
                border: 'solid 2px gray'
            }}><i class="fa-solid fa-arrow-rotate-right"></i></button>
        </div>
    );
}

Contador.PropTypes = {
    number: PropTypes.number,
    play: PropTypes.func,
    stop: PropTypes.func,
    reload: PropTypes.func,
}


