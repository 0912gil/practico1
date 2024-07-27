"use client"


import React, { useEffect, useState } from 'react';
import Item from './components/Item';
import crisisData from '../data.json';
import fraudesData from '../data2.json';
import './page.module.css';

function App() {
  const [items, setItems] = useState([]);
  const [selectedDataTypes, setSelectedDataTypes] = useState({
    crisis: false,
    fraudes: false
  });

  useEffect(() => {
    let selectedItems = [];
    if (selectedDataTypes.crisis) {
      selectedItems = [...selectedItems, ...crisisData.crisis_economicas];
    }
    if (selectedDataTypes.fraudes) {
      selectedItems = [...selectedItems, ...fraudesData.fraudes_cripto];
    }
    setItems(selectedItems);
  }, [selectedDataTypes]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedDataTypes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="App">
      <div className="checkboxes">
       
        <label>
          <input
            type="checkbox"
            name="fraudes"
            checked={selectedDataTypes.fraudes}
            onChange={handleCheckboxChange}
          />
          Fraudes Cripto
  </label>
      </div>
      {items.map((item, index) => (
        <Item
          key={index}
          titulo={item.titulo}
          descripcion={item.descripcion}
          caracteristicas={item.caracteristicas}
          imagen_de_referencia={item.imagen_de_referencia}
        />
      ))}
    </div>
  );
}

export default App;