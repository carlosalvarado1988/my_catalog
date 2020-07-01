import React from "react";
// import { CheckCircleTwoTone, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { DeliveryCardDetails } from "../partials/DeliveryCardDetails";

export const DeliveryOrder = React.memo(function Component() {
  return (
    <Wrapper>
      <h1 className="page-title">Orden de Entrega</h1>
      <DeliveryCardDetails />

      {/* <form className="grid-items-list">
        <div className="grid-item">
          <CheckCircleTwoTone className="check-valid" twoToneColor="#52c41a" />
          <h4>Cliente:</h4>
          <div>
            <label htmlFor="contact-name">Nombre:</label>
            <input id="contact-name" type="text" required></input>
          </div>
          <div>
            <label htmlFor="contact-name">Apellidos:</label>
            <input id="contact-name" type="text" required></input>
          </div>
          <div>
            <label htmlFor="contact-phone">Telefono:</label>
            <input id="contact-phone" type="text" required></input>
          </div>
        </div>

        <div className="grid-item">
          <CheckCircleTwoTone className="check-valid" twoToneColor="#52c41a" />
          <h4>Fecha de entrega:</h4>
          <div>
            <label htmlFor="date">Dia:</label>
            <input id="date" type="date" required></input>
          </div>
          <div>
            <label>De:</label>
            <input type="time" required></input>
            <label>a:</label>
            <input type="time" required></input>
          </div>
        </div>

        <div className="grid-item">
          <CheckCircleTwoTone className="check-valid" twoToneColor="#52c41a" />
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
          <CheckCircleTwoTone className="check-valid" twoToneColor="#52c41a" />
          <h4>Pago:</h4>
          <div>
            <label>Metodo de pago:</label>
            <select defaultValue="cash">
              <option value="cash">Pago a contra entrega</option>
              <option value="cc">Tarjeta de credito</option>
            </select>
          </div>
        </div>
      </form> */}
    </Wrapper>
  );
});

const Wrapper = styled.main`
  min-height: 100%;
  padding-bottom: 30px;
  box-sizing: border-box;
  /* color: var(--text-color); */
  font-size: var(--text-size-web);

  .page-title {
    text-align: center;
  }

  .check-valid {
    position: relative;
    float: right;
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: var(--text-size-mobile);
    padding-bottom: 10px;
  }
`;
