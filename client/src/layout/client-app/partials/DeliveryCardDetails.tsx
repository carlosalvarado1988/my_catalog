import React from "react";
import { DatePicker, TimePicker, Input, Select } from "antd";
import styled from "styled-components";
const { TextArea } = Input;
const { Option } = Select;

export const DeliveryCardDetails = React.memo(function Component() {
  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current.valueOf() === Date.now();
  }

  return (
    <Wrapper>
      <div className="select-delivery-type">
        <div className="delivery">
          <div className="title">Forma de entrega</div>
          <Select placeholder="Elegir" className="editable filled select">
            <Option value="pickup">En sucursal</Option>
            <Option value="delivery">Domicilio</Option>
            <Option value="meeting">Punto de encuentro</Option>
          </Select>
        </div>
        <div className="delivery-cost">
          <div className="title">Costo</div>
          <div>$0.00</div>
        </div>
      </div>

      <div className="delivery-option">
        <div className="date-time">
          <div className="date">
            <div className="title">Fecha</div>
            <DatePicker
              className="editable filled"
              placeholder="Eligir"
              format={`DD/MM/YYYY`}
              disabledDate={disabledDate}
            />
          </div>
          <div className="time">
            <div className="title">Hora</div>
            <TimePicker
              className="editable filled"
              placeholder="Eligir"
              format={`HH:mm`}
              minuteStep={15}
              use12Hours={true}
            />
          </div>
        </div>

        <div className="address">
          <div className="title">Direccion:</div>
          <TextArea
            className="editable filled"
            placeholder="Direccion exacta"
            rows={2}
          ></TextArea>
          <div className="additional-reference">
            <div className="title">Referencia adicional: (Opcional)</div>
            <TextArea
              className="editable filled"
              placeholder="Nos ayuda a ubicar el lugar mas facil"
              rows={4}
            ></TextArea>
          </div>
        </div>
      </div>

      <div className="payment-section">
        <div className="customer">
          <div className="title">Cliente</div>
          <Input
            className="editable filled"
            placeholder="Quien lo recibe"
          ></Input>
          <div className="phone title">Telefono</div>
          <Input
            className="editable filled"
            placeholder="Donde nos comunicamos"
          ></Input>
        </div>
        <div className="cart-items">
          <div className="title">Costo por productos:</div>
          <div>$21.25</div>
        </div>
        <div className="payment-method">
          <div className="title">Forma de pago</div>
          <Select className="editable filled select" defaultValue="chash">
            <Option value="chash">Efectivo</Option>
            <Option value="credit-card" disabled>
              Tarjeta de credito
            </Option>
          </Select>
        </div>
        <div className="payment-total">
          <div className="title">Total a pagar</div>
          <div>$21.25</div>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 70%;
  font-size: 2rem;
  .title {
    font-weight: bold;
  }

  .select-delivery-type {
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .delivery {
      padding: 10px;
      .select {
        width: 175px;
      }
    }
    .delivery-cost {
      padding: 10px;
    }
  }

  .delivery-option {
    margin-bottom: 10px;
    border: 1px solid;
    border-radius: 5px;
    .date-time {
      display: flex;
      justify-content: space-between;
      .date {
        width: 50%;
        border-right: 1px solid;
        padding: 10px;
      }
      .time {
        padding: 10px;
      }
    }
    .address {
      padding: 10px;
      border-top: 1px solid;
    }
    .phone,
    .additional-reference {
      margin-top: 5px;
    }
  }

  .payment-section {
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid;
    .customer {
      padding: 10px;
    }
    .cart-items,
    .payment-method,
    .payment-total {
      padding: 10px;
      border-top: 1px solid;
    }
  }

  .payment-method .select {
    width: 200px;
  }

  .editable {
    border: 0;
    border-bottom: 1px solid;
    &.filled {
      border: 0;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 1.4rem;
    .delivery-option .date {
      width: 55%;
    }

    .payment-method .select {
      width: 165px;
    }
  }
  @media (max-width: 350px) {
    .delivery-option .date {
      width: 65%;
    }
  }
`;
