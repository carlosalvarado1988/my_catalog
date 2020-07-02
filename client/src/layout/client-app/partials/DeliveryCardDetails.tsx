import React from "react";
import moment, { Moment } from "moment";
import { DatePicker, TimePicker, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { CheckCircleTwoTone, CloseOutlined } from "@ant-design/icons";

import { useCheckout } from "../hooks/useCheckout";
import { convertNumberToCurrency } from "../../../common/utils";

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
  } = useCheckout();
  console.log("total_pay: ", total_pay);

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
      <div className="select-delivery-type">
        <div className="delivery">
          <div className="title">Forma de entrega</div>
          <Select
            placeholder="Elegir"
            className="editable filled select"
            defaultValue={delivery_type}
            onChange={(value: DeliveryTypeEnum) => {
              dispatch(changeDeliveryTypeAction(value));
            }}
          >
            <Option value={DeliveryTypeEnum.PICKUP}>Para llevar</Option>
            <Option value={DeliveryTypeEnum.DELIVERY}>Domicilio</Option>
          </Select>
        </div>
        <div className="delivery-cost">
          <div className="title">Costo</div>
          <div>
            {convertNumberToCurrency(delivery_type_cost, CurrenciesEnum.USD)}
          </div>
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
            <div className="title">Hora</div>
            <TimePicker
              className="editable filled"
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
          <div className="title">Direccion:</div>
          <TextArea
            className="editable filled"
            placeholder="Direccion exacta"
            rows={2}
            defaultValue={address}
            onChange={(e) => {
              dispatch(changeAddressAction(e.target.value));
              e.preventDefault();
            }}
          ></TextArea>
          <div className="additional-reference">
            <div className="title">Referencia adicional: (Opcional)</div>
            <TextArea
              className="editable filled"
              placeholder="Nos ayuda a ubicar el lugar mas facil"
              rows={4}
              defaultValue={additional_reference}
              onChange={(e) => {
                dispatch(changeAddionalReferenceAction(e.target.value));
                e.preventDefault();
              }}
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
            defaultValue={customer}
            onChange={(e) => {
              dispatch(changeCustomerAction(e.target.value));
              e.preventDefault();
            }}
          ></Input>
          <div className="phone title">Telefono</div>
          <Input
            className="editable filled"
            placeholder="Donde nos comunicamos"
            defaultValue={phone}
            onChange={(e) => {
              dispatch(changePhoneAction(e.target.value));
              e.preventDefault();
            }}
          ></Input>
        </div>
        <div className="cart-items">
          <div className="title">Costo por productos:</div>
          <div>{convertNumberToCurrency(items_cost, CurrenciesEnum.USD)}</div>
        </div>
        <div className="payment-method">
          <div className="title">Forma de pago</div>
          <Select className="editable filled select" value={payment_method}>
            <Option value={PaymentMethodEnum.CASH}>Efectivo</Option>
            <Option value={PaymentMethodEnum.CREDIT_CARD} disabled>
              Tarjeta de credito
            </Option>
          </Select>
        </div>
        <div className="payment-total">
          <div className="title">Total a pagar</div>
          <div>{convertNumberToCurrency(total_pay, CurrenciesEnum.USD)}</div>
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
