import React, { useContext } from "react";
import { ParentsContext } from "../../../contexts/ParentsContext";
import Button from "../atoms/Button";
import cutLastId from "../../../utils/cutLastId";

const SearchButton: React.FunctionComponent<any> = ({ setSearch, search }) => {
  const { parents, setParents } = useContext(ParentsContext);

  return (
    <>
      <Button
        title={"search"}
        action={() => setSearch({ ...search, show: true })}
        color="indigo"
      />
    </>
  );
};

export default SearchButton;
