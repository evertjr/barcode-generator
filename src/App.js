import React from 'react';
import './App.css';
import JsBarcode from 'jsbarcode'
import { useState } from 'react'

function App() {

  const [textField1, setTextField1] = useState();
  const [textField2, setTextField2] = useState();
  const [textField3, setTextField3] = useState();
  const [textField4, setTextField4] = useState();


  window.setTimeout(function(){
    JsBarcode("#barcode1",textField1, {fontSize: 35})
    JsBarcode("#barcode2",textField2, {fontSize: 35})
    JsBarcode("#barcode3",textField3, {fontSize: 35})
    JsBarcode("#barcode4",textField4, {fontSize: 35})
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
      <h3>Gerador de Código de Barra</h3>
      <div className="Barcodes">

        <table>
          <tr>
            <td>
              <svg id="barcode1"/>
              <svg id="barcode2"/>
            </td>
          </tr>
          <tr>
          <td>
              <svg id="barcode3"/>
              <svg id="barcode4"/>
            </td>
          </tr>
        </table>
        </div>
      <input type="text" placeholder="Código 1" onChange={e => setTextField1(e.target.value)}/>
      <input type="text" placeholder="Código 2" onChange={e => setTextField2(e.target.value)}/>
      <input type="text" placeholder="Código 3" onChange={e => setTextField3(e.target.value)}/>
      <input type="text" placeholder="Código 4" onChange={e => setTextField4(e.target.value)}/>
      <button onClick={()=> window.print()}>Imprimir</button>
      </header>
    </div>
  );
}

export default App;
