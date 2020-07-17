import React from "react";
import moment, { Moment } from "moment";
import { DatePicker, TimePicker, Input, Select, Divider } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  WhatsAppOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

import { useCheckout } from "../hooks/useCheckout";
import { convertNumberToCurrency, valueIsNumeric } from "../../../common/utils";

import {
  DeliveryTypeEnum,
  PaymentMethodEnum,
  CurrenciesEnum,
} from "../../../common/types/api/enums.d";
import {
  changeDateAction,
  changeTimeAction,
  changeAddressAction,
  changeAddionalReferenceAction,
  changeCustomerAction,
  changePhoneAction,
  changeDeliveryTypeAction,
} from "../../../redux/delivery-order/actions";

const { TextArea } = Input;
const { Option } = Select;

export const DeliveryCardDetails = React.memo(function Component() {
  const dispatch = useDispatch();
  const {
    delivery_type,
    date,
    time,
    address,
    additional_reference,
    customer,
    phone,
    payment_method,
    items_cost,
    delivery_type_cost,
    total_pay,
    valid_customer_details,
    valid_delivery_details,
  } = useCheckout();

  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current.valueOf() === Date.now();
  }

  function parseDateTime(
    date: string | null,
    format: string
  ): Moment | undefined {
    return date ? moment(date, format) : undefined;
  }

  return (
    <Wrapper>
      <div className="customer-section">
        <div className="customer-name">
          {!valid_customer_details && (
            <WarningOutlined className="check-icon red" />
          )}
          {valid_customer_details && (
            <CheckCircleOutlined className="check-icon green" />
          )}

          <div className="title">
            <p>Cliente</p>
          </div>
          <Input
            className="input editable filled"
            placeholder={`Quien lo recibe`}
            defaultValue={customer}
            onChange={(e) => {
              dispatch(changeCustomerAction(e.target.value));
              e.preventDefault();
            }}
          ></Input>
        </div>
        <div className="customer-contact">
          <div className="phone title">
            <p>
              Telefono <WhatsAppOutlined />
            </p>
          </div>
          <Input
            className="input editable filled"
            placeholder="de contacto"
            value={phone}
            maxLength={8}
            onChange={(e) => {
              if (valueIsNumeric(e.target.value)) {
                dispatch(changePhoneAction(e.target.value));
              }
              e.preventDefault();
            }}
          ></Input>
        </div>
      </div>

      <div className="select-delivery-type">
        <div className="delivery">
          <div className="title">
            <p>Tipo de entrega</p>
          </div>
          <Select
            placeholder="Elegir"
            className="input editable filled select"
            defaultValue={delivery_type}
            onChange={(value: DeliveryTypeEnum) => {
              dispatch(changeDeliveryTypeAction(value));
            }}
          >
            <Option value={DeliveryTypeEnum.PICKUP}>Pasar a recoger</Option>
            <Option value={DeliveryTypeEnum.DELIVERY}>Domicilio</Option>
          </Select>
        </div>
        <div className="delivery-cost">
          <div className="title">
            <p>Costo:</p>
          </div>
          <div>
            <p>
              {convertNumberToCurrency(delivery_type_cost, CurrenciesEnum.USD)}
            </p>
          </div>
        </div>
      </div>

      <div className="delivery-option">
        <div className="date-time">
          <div className="date">
            <div className="title">
              <p>Fecha</p>
            </div>
            <DatePicker
              className="input editable filled"
              placeholder="Eligir"
              format={`DD/MM/YYYY`}
              showToday={false}
              disabledDate={disabledDate}
              defaultValue={parseDateTime(date, `DD/MM/YYYY`)}
              onChange={(value: any, dateString: string) => {
                dispatch(changeDateAction(dateString));
                return;
              }}
            />
          </div>
          <div className="time">
            <div className="title">
              <p>Hora</p>
            </div>
            <TimePicker
              className="input editable filled"
              placeholder="Eligir"
              format={`HH:mm`}
              minuteStep={15}
              use12Hours={true}
              value={parseDateTime(time, `HH:mm`)}
              onChange={(time: any, timeString) => {
                dispatch(changeTimeAction(timeString));
                return;
              }}
            />
          </div>
        </div>

        <div className="address">
          {!valid_delivery_details && (
            <WarningOutlined className="check-icon red" />
          )}
          {valid_delivery_details && (
            <CheckCircleOutlined className="check-icon green" />
          )}

          <div className="title">
            <p>Direccion:</p>
          </div>
          <TextArea
            className="input editable filled"
            placeholder="Direccion exacta"
            rows={2}
            defaultValue={address}
            onChange={(e) => {
              dispatch(changeAddressAction(e.target.value));
              e.preventDefault();
            }}
          ></TextArea>
          <div className="additional-reference">
            <div className="title">
              <p>Referencia adicional: (Opcional)</p>
            </div>
            <TextArea
              className="input editable filled"
              placeholder="Nos ayuda a ubicar el lugar mas facil"
              rows={2}
              defaultValue={additional_reference}
              onChange={(e) => {
                dispatch(changeAddionalReferenceAction(e.target.value));
                e.preventDefault();
              }}
            ></TextArea>
          </div>
        </div>
      </div>

      <div className="payment-method">
        <div className="title">
          <p>Forma de pago</p>
        </div>
        <Select className="input editable filled select" value={payment_method}>
          <Option value={PaymentMethodEnum.CASH}>Efectivo</Option>
          <Option value={PaymentMethodEnum.CREDIT_CARD} disabled>
            Tarjeta de credito
          </Option>
        </Select>
        <div className="cart-items">
          {items_cost === 0 && (
            <div className="notification-message">
              <h5>Tu carrito de compras esta vacio</h5>
            </div>
          )}
          <Divider className="devider-line" plain />
          <div className="row">
            <p>Productos</p>
            <p>{convertNumberToCurrency(items_cost, CurrenciesEnum.USD)}</p>
          </div>
          <div className="row">
            <p>Envio</p>
            <p>
              {convertNumberToCurrency(delivery_type_cost, CurrenciesEnum.USD)}
            </p>
          </div>
          <Divider className="devider-line" plain>
            <p>
              Total por pagar:{" "}
              {convertNumberToCurrency(total_pay, CurrenciesEnum.USD)}
            </p>
          </Divider>
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
  .notification-message {
    text-align: center;
    border: 5px solid red;
    border-radius: 20px;
    box-sizing: border-box;
    border-bottom: none;
    margin: 15px 0;
    h5 {
      margin: 5px 0;
    }
  }
  .check-icon {
    float: right;
    padding: 10px;
    font-size: 3rem;
    margin: auto;
    &.red {
      color: red;
    }
    &.green {
      color: green;
    }
  }
  .title {
    font-weight: bold;
  }
  .input {
    font-size: 1.8rem;
  }

  .customer-section {
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid;
    .customer-name,
    .customer-contact {
      padding: 10px;
      font-size: 1.8rem;
    }
  }

  .select-delivery-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid;
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
    border: 1px solid;
    border-radius: 5px;
    margin-bottom: 20px;
    .date-time {
      display: flex;
      justify-content: space-between;
      .date {
        width: 50%;
        border-right: 1px solid;
        padding: 10px;
        .title {
          display: inline-block;
          margin-right: 30px;
        }
      }
      .time {
        width: 50%;
        padding: 10px;
        .title {
          display: inline-block;
          margin-right: 30px;
        }
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

  .payment-method {
    text-align: center;
    .title {
      margin-right: 10px;
      display: inline-block;
    }
    .select {
      display: inline-block;
      width: 200px;
      border: 0;
    }
    .cart-items {
      width: 80%;
      margin: 0 auto;
      .row {
        display: flex;
        justify-content: space-between;
      }
      .devider-line {
        margin: 10px 0;
      }
    }
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
    ..notification-message {
      margin: 10px 0;
    }
    .check-icon {
      font-size: 1.5rem;
    }
    .input {
      font-size: 1.4rem;
    }
    .customer-section {
      display: block;
      margin-bottom: 10px;
      .customer-name,
      .customer-contact {
        width: 100%;
        font-size: 1.4rem;
      }
    }
    .select-delivery-type {
      margin-bottom: 10px;
    }
    .delivery-option {
      margin-bottom: 10px;
      .date {
        width: 55%;
        .title {
          display: block;
          margin-right: unset;
        }
      }
      .time {
        .title {
          display: block;
          margin-right: unset;
        }
      }
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
