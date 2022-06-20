import { onMount, useContext } from "solid-js";
import { SearchBBQFieldContext } from "../../container";
import BBQFieldSearchResults from "../03_organizms/BBQFieldSearchResults";

export default () => {
  const { searchBBQFields } = useContext(SearchBBQFieldContext);
  onMount(async () => {
    await searchBBQFields();
  });
  return (
    <>
      <h2>検索結果</h2>
      <BBQFieldSearchResults />
    </>
  );
};
