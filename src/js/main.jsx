import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import { Contador } from './components/Contador';
import { Regresive } from './components/Regressive';



let seconds = 0;
let regressive = 0;
const newInput = (newValue) => {
  regressive = parseInt(newValue) || 0;
  render();
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    <React.StrictMode>
      <Contador
        number= {seconds}
        stop={() => clearInterval(contador)}
        play={continuar}
        reload={reiniciar}
      >
      </Contador>
      <Regresive
        number={regressive}
        change={newInput}
        stop={() => clearInterval(regreso)}
        play={continuarReg}
        reload={reiniciarReg}>
      </Regresive>
    </React.StrictMode>,
  )
}

let reiniciar = () =>{
  seconds = 0
};

let continuar = () => {
  clearInterval(contador)
  contador = setInterval(() => {
    seconds++
    render()
  }, 1000);
};

let contador = setInterval(() => {
  seconds++
  render()
}, 1000);


let reiniciarReg = () =>{
  regressive =0
};

let continuarReg = () => {
clearInterval(regreso)
regreso = setInterval(()=>{
  regressive--
  render()
}, 1000);
};

let regreso = setInterval(() => {
  if (regressive > 0) {
    regressive--;
    render();
  } else {
    clearInterval(regreso);
  }
}, 1000);


render()