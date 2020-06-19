import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import { clearNotificationAction } from "../../../redux/notification/actions";
import { selectNotification } from "../../../redux/notification/selectors";
import { ActionStageEnum } from "../../../common/types/api/enums.d";

export const useNotification = () => {
  const dispatch = useDispatch();
  const { closeUntilResponse, show, stage, message, description } = useSelector(
    selectNotification
  );

  notification.config({
    placement: "topRight",
    bottom: 40,
  });

  useEffect(() => {
    if (show) {
      notification.destroy();
      const config = {
        message,
        description,
        duration: closeUntilResponse ? 0 : 5,
        onClose: () => {
          dispatch(clearNotificationAction());
        },
      };
      switch (stage) {
        case ActionStageEnum.STARTED:
          notification.open(config);
          break;
        case ActionStageEnum.DONE:
          notification.success(config);
          break;
        case ActionStageEnum.FAILED:
          notification.error(config);
          break;
        default:
          notification.open(config);
      }
    }
  }, [dispatch, closeUntilResponse, show, stage, message, description]);
};
