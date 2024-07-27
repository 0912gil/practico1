import React from 'react';
import './Item.css';

const Item = ({ titulo, descripcion, caracteristicas, imagen_de_referencia }) => {
  return (
    <div className="item">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      {imagen_de_referencia && <img src={imagen_de_referencia} alt={titulo} />}
      <div className="caracteristicas">
        {Array.isArray(caracteristicas) ? (
          caracteristicas.map((caracteristica, index) => (
            <p key={index}>{caracteristica}</p>
          ))
        ) : (
          <>
            <p><strong>Fecha:</strong> {caracteristicas.fecha}</p>
            <p><strong>Impacto:</strong> {caracteristicas.impacto}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;