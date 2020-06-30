import React from "react";
import { useHistory } from "react-router-dom";
import { CheckCircleTwoTone, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const DeliveryOrder = React.memo(function Component() {
  const history = useHistory();
  return (
    <Wrapper>
      <div className="close-checkout">
        <CloseOutlined onClick={() => history.goBack()} />
      </div>
      <h1>Orden de Entrega</h1>
      <form className="grid-items-list">
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
      </form>
    </Wrapper>
  );
});

const Wrapper = styled.main`
  .close-checkout {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 30px;
    padding: 20px 20px 20px 0;
    margin: 10px 0;
    font-size: 2rem;
    :hover,
    :focus {
      opacity: 0.8;
    }
  }
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  /* color: var(--text-color); */
  font-size: var(--text-size-web);
  .grid-item {
    > h2 {
      margin: 0 0 5px;
    }
    > div {
      display: block;
    }
  }

  .check-valid {
    position: relative;
    float: right;
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: var(--text-size-mobile);
    .close-checkout {
      padding: 0;
    }
    .grid-items-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;
