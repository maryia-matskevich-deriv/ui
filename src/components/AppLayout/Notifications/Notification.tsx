import React from "react";
import { NotificationProps } from "./types";

const Notification = ({
    icon,
    title,
    message,
    buttonAction,
    actionText,
}: NotificationProps) => {
    return (
        <div className="notification">
            <div className="notification__container">
                <div className="notification__icon">{icon}</div>
                <div className="notification__text">
                    <h3 className="notification__title">{title}</h3>
                    <div className="notification__message">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
            <div className="notification__button-container">
                <button className="notification__button" onClick={buttonAction}>
                    {actionText}
                </button>
            </div>
        </div>
    );
};
export default Notification;
