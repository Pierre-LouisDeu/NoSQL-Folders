import React, { useContext } from "react";
import { ParentsContext } from "../../../contexts/ParentsContext";
import Button from "../atoms/Button";
import cutLastId from "../../../utils/cutLastId";

const GoBackButton: React.FunctionComponent = () => {
  const { parents, setParents } = useContext(ParentsContext);

  const goBackAction = () => {
    if (parents) {
      const newParents = cutLastId(parents);
      setParents(newParents);
    }
  };

  return (
    <>
      <Button title="&larr; Go Back" action={goBackAction} color="indigo" />
    </>
  );
};

export default GoBackButton;
