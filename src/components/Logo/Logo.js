import React from "react";
import logo from "../../assets/logo.png";

const Logo = ({ width }) => {
    return (
        <div className='header__logo'>
            <img src={logo} alt='Logo' width={width} />
        </div>
    );
};

Logo.defaultProps = {
    width: "280px",
};

export default Logo;
