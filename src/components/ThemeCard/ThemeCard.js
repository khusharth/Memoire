import React from "react";
import "./themeCard.scss";

const ThemeCard = ({ type, imageWidth, onClick, active }) => {
    let selected = active === type ? "active" : "";
    let image = "";
    let bgColor = "";

    if (type === "Pokemon") {
        image = "https://pokeres.bastionbot.org/images/pokemon/25.png";
        bgColor = "green";
    } else if (type === "Dogs") {
        image =
            "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3400.jpg";
        bgColor = "brown";
    } else {
        image = "https://robohash.org/1004.png";
        bgColor = "blue";
    }

    return (
        <div
            onClick={onClick}
            className={`themeBox themeBox--${bgColor} ${selected}`}>
            <div>
                <img src={image} alt={type} width={imageWidth} />
            </div>
            <div>{type}</div>
        </div>
    );
};

ThemeCard.defaultProps = {
    imageWidth: "100%",
};

export default ThemeCard;
