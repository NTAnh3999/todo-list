import React from "react";
import { CardHeader, CardTitle } from "reactstrap";
import ThemeButton from "../ThemeButton";

const Header = ({ isDarkMode }) => {
  const color = isDarkMode ? "var(--light-color)" : "var(--dark-color)";
  return (
    <CardHeader>
      <CardTitle tag={"h3"} style={{ color }}>
        Todo list
      </CardTitle>
      <ThemeButton />
    </CardHeader>
  );
};

export default Header;
