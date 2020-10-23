import React from 'react';
import './App.css';
import JsBarcode from 'jsbarcode'
import { useState } from 'react'

function App() {

  const [textField1, setTextField1] = useState();
  const [textField2, setTextField2] = useState();
  const [textField3, setTextField3] = useState();

  const [descField1, setDescField1] = useState();
  const [descField2, setDescField2] = useState();
  const [descField3, setDescField3] = useState();





  window.setTimeout(function(){
    JsBarcode("#barcode1",textField1, {fontSize: 35, width: 3})
    JsBarcode("#barcode2",textField2, {fontSize: 35, width: 3})
    JsBarcode("#barcode3",textField3, {fontSize: 35, width: 3})
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
      <h3>Gerador de Código de Barras</h3>
      <div className="Col">
      <div className="Inputs">
            <input type="text" placeholder="Código 1" onChange={e => setTextField1(e.target.value)}/>
            <input type="text" placeholder="Descrição" onChange={e => setDescField1(e.target.value)}/>

            <input type="text" placeholder="Código 2" onChange={e => setTextField2(e.target.value)}/>
            <input type="text" placeholder="Descrição" onChange={e => setDescField2(e.target.value)}/>

            <input type="text" placeholder="Código 3" onChange={e => setTextField3(e.target.value)}/>
            <input type="text" placeholder="Descrição" onChange={e => setDescField3(e.target.value)}/>

            <button onClick={()=> window.print()}>Imprimir</button>
          </div>

        <div className="Barcodes">
              <span>{descField1}</span>
                <svg id="barcode1"/>

              <span>{descField2}</span>
                <svg id="barcode2"/>

              <span>{descField3}</span>
                <svg id="barcode3"/>
          </div>
      </div>
      
      </header>
    </div>
  );
}

export default App;
