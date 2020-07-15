import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import "./Header.css";
import { IconButton } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className="scorekeeper-header">
      <h2 className="scorekeeper-title"> Score-Keeper</h2>
      <IconButton color="inherit">
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
