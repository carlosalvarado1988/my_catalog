import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useCheckout } from "../hooks/useCheckout";
import { BackNavigationIcon } from "../partials/BackNavigationIcon";

export const UserAvatar = React.memo(function () {
  const { checkoutDelivery } = useCheckout();

  return checkoutDelivery ? (
    <BackNavigationIcon checkoutDelivery={checkoutDelivery} />
  ) : (
    <Avatar icon={<UserOutlined />} />
  );
});
