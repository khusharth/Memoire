import React, { useContext } from "react";
import PropTypes from "prop-types";
import blueCard from "../../assets/card.png";
import greenCard from "../../assets/card-2.png"
import brownCard from "../../assets/card-3.png"
import { ThemeContext } from "../../ThemeContext";

import "./Card.scss";

const getImage = (type) => {
    let image = "";

    switch (type) {
        case "red":
            image = "https://robohash.org/1.png";
            break;
        case "yellow":
            image = "https://robohash.org/2.png";
            break;
        case "purple":
            image = "https://robohash.org/3.png";
            break;
        case "green":
            image = "https://robohash.org/5.png";
            break;
        case "grey":
            image = "https://robohash.org/8.png";
            break;
        case "pink":
            image = "https://robohash.org/9.png";
            break;
        case "brown":
            image = "https://robohash.org/27.png";
            break;
        case "blue":
            image = "https://robohash.org/1004.png";
            break;
        case "bulbasaur":
            image = "https://pokeres.bastionbot.org/images/pokemon/1.png";
            break;
        case "charizard":
            image = "https://pokeres.bastionbot.org/images/pokemon/6.png";
            break;
        case "squirtle":
            image = "https://pokeres.bastionbot.org/images/pokemon/7.png";
            break;
        case "butterfree":
            image = "https://pokeres.bastionbot.org/images/pokemon/12.png";
            break;
        case "psyduck":
            image = "https://pokeres.bastionbot.org/images/pokemon/54.png";
            break;
        case "pikachu":
            image = "https://pokeres.bastionbot.org/images/pokemon/25.png";
            break;
        case "jigglypuff":
            image = "https://pokeres.bastionbot.org/images/pokemon/39.png";
            break;
        case "meowth":
            image = "https://pokeres.bastionbot.org/images/pokemon/52.png";
            break;
        case "lhasa":
            image = "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg";
            break;
        case "eskimo":
            image = "https://images.dog.ceo/breeds/eskimo/n02109961_18552.jpg";
            break;
        case "ridgeback":
            image = "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_4459.jpg";
            break;
        case "german":
            image = "https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg";
            break;
        case "mastiff":
            image = "https://images.dog.ceo/breeds/mastiff-bull/n02108422_5143.jpg";
            break;
        case "terrier":
            image = "https://images.dog.ceo/breeds/terrier-silky/n02097658_10289.jpg";
            break;
        case "bulldog":
            image = "https://images.dog.ceo/breeds/bulldog-boston/n02096585_8203.jpg";
            break;
        case "rottweiler":
            image = "https://images.dog.ceo/breeds/rottweiler/n02106550_11203.jpg";
            break;
        default:
            image = "";
    }

    return image;
};

const getCardImage = (theme) => {
    let image = "";
    if (theme === 'blue') {
        image = blueCard;
    } else if (theme === 'green') {
        image = greenCard;
    } else {
        image = brownCard;
    }
    return image;
};

const Card = ({
    id,
    type,
    flipped,
    solved,
    height,
    width,
    onClick,
    disabled,
}) => {
    const { theme } = useContext(ThemeContext);

    let frontImage = getImage(type);

    let cardImage = getCardImage(theme)

    return (
        <div
            className={`card__container ${flipped ? "flipped" : ""}`}
            style={{ width, height }}
            onClick={() => (disabled ? null : onClick(id))}>
            <div className='flipper'>
                {/* <img
                    className='card__border-top'
                    src={border}
                    width='50%'
                    alt='border'
                />
                <img
                    className='card__border-bottom'
                    src={border}
                    width='50%'
                    alt='border'
                />
                <img
                    className='card__icon'
                    src={icon}
                    width='50%'
                    alt='border'
                /> */}
                <img
                    alt='card'
                    height={height}
                    className={flipped ? "card__front" : "card__back"}
                    width={width}
                    src={flipped || solved ? frontImage : cardImage}
                />
            </div>
        </div>
    );
};

Card.prototype = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default Card;
