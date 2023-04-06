import React, { useMemo } from "react";
import { Badge } from "reactstrap";

const Tag = ({ tagStatus }) => {
  const tagText = tagStatus === "inProgress" ? "In Progress" : "Done";
  const tags = useMemo(() => {
    return {
      done: "success",
      inProgress: "warning",
    };
  }, []);
  return <Badge color={tags[`${tagStatus}`]}>{tagText}</Badge>;
};

export default Tag;
