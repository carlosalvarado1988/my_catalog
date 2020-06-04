import React from "react";
import styled from "styled-components";

export const DeliveryOrder = () => (
  <Wrapper>
    <h1>Orden de Entrega</h1>
    <form className="grid-items-list">
      <div className="grid-item">
        <h4>Cliente:</h4>
        <div>
          <label for="contact-name">Nombre:</label>
          <input id="contact-name" type="text" required></input>
        </div>
        <div>
          <label for="contact-name">Apellidos:</label>
          <input id="contact-name" type="text" required></input>
        </div>
        <div>
          <label for="contact-phone">Telefono:</label>
          <input id="contact-phone" type="text" required></input>
        </div>
      </div>

      <div className="grid-item">
        <h4>Fecha de entrega:</h4>
        <div>
          <label>Dia:</label>
          <input type="date" format="DD/MM/YYYY" required></input>
        </div>
        <div>
          <label>De:</label>
          <input type="time" required></input>
          <label>a:</label>
          <input type="time" required></input>
        </div>
      </div>

      <div className="grid-item">
        <h4>Lugar de entrega:</h4>
        <div>
          <label>Direccion:</label>
          <input type="text" required></input>
        </div>
        <div>
          <label>Referencia adicional:</label>
          <input type="text" required></input>
        </div>
      </div>

      <div className="grid-item">
        <h4>Pago:</h4>
        <div>
          <label>Metodo de pago:</label>
          <select disabled>
            <option selected>Pago a contra entrega</option>
            <option>Tarjeta de credito</option>
          </select>
        </div>
      </div>
    </form>
  </Wrapper>
);

const Wrapper = styled.main`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  color: var(--text-color);
  font-size: var(--text-size-web);
  /* .grid-items-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
  } */
  .grid-item {
    /* width: 100%;
    padding: 30px;
    border: 0.3px solid lightcoral;
    border-radius: 5px;
    box-sizing: border-box; */
    > h2 {
      margin: 0 0 5px;
    }
    > div {
      display: block;
    }
  }

  @media (max-width: 600px) {
    font-size: var(--text-size-mobile);
    .grid-items-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;
