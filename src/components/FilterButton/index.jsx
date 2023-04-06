import React, { useContext } from "react";
import Switch from "react-switch";
import { GlobalContext } from "../../context";

const FilterButton = () => {
  const { isDarkMode, setFilter, filter } = useContext(GlobalContext);
  const color = isDarkMode ? "var(--light-color)" : "var(--dark-color)";
  const isFilteredDone = filter === "done";
  const handleToggleFilter = function () {
    if (filter === "done") {
      setFilter("inProgress");
    } else {
      setFilter("done");
    }
  };
  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <span style={{ paddingRight: "0.5rem", color }}>
        {filter === "done" ? "Done" : "In Progress"}
      </span>
      <Switch onChange={handleToggleFilter} checked={isFilteredDone} />
    </label>
  );
};

export default FilterButton;
