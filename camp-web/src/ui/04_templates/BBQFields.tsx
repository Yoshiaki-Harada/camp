import { onMount, useContext } from "solid-js";
import { SearchBBQFieldContext } from "../../container";
import BBQFieldSearchResults from "../03_organizms/BBQFieldSearchResults";

export default () => {
  return (
    <>
      <h2>Result..</h2>
      <BBQFieldSearchResults />
    </>
  );
};
