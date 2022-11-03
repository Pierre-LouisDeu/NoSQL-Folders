import React, { useContext } from "react";
import { ParentsContext } from "../../../contexts/ParentsContext";
import Button from "../atoms/Button";
import cutLastId from "../../../utils/cutLastId";

type GoBackButtonProps = {
  active: boolean;
};

const GoBackButton: React.FunctionComponent<GoBackButtonProps> = ({active}) => {
  const { parents, setParents } = useContext(ParentsContext);

  const goBackAction = () => {
    if (parents) {
      const newParents = cutLastId(parents);
      setParents(newParents);
    }
  };

  return (
    <>
      <Button title="&larr;" action={goBackAction} color={active ? "indigo" : "gray"} />
    </>
  );
};

export default GoBackButton;
