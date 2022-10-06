import React, { useContext } from "react";
import { ParentsContext } from "../../../contexts/ParentsContext";
import Button from "../atoms/Button";
import usePost from "../../../hooks/usePost";

const AddButton: React.FunctionComponent = () => {
  const { parents, setParents } = useContext(ParentsContext);
  const { postNewFolder } = usePost();

  const addAction = () => {
    postNewFolder(parents);
  };

  return (
    <>
      <Button title="+ Add" action={addAction} color="green" />
    </>
  );
};

export default AddButton;
