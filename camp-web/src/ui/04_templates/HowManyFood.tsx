import { css } from "@emotion/css";
import { useContext, onMount } from "solid-js";
import { LoadFoodContext } from "../../container";
import FoodAnswerSection from "../03_organizms/FoodAnswerSection";
import FoodQuestionSection from "../03_organizms/FoodQuestionSection";
import PeopleQuestionSection from "../03_organizms/PeopleQuestionSection";

const questions = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;
`;

const body = css`
  padding: 10px;
`;

export default () => {
  const { loadFoods } = useContext(LoadFoodContext);
  onMount(async () => {
    await loadFoods();
  });
  return (
    <div>
      <h1>BBQどんだけ買えばいいいの？</h1>
      <div class={body}>
        <div class={questions}>
          <PeopleQuestionSection></PeopleQuestionSection>
          <FoodQuestionSection></FoodQuestionSection>
        </div>
        <div>
          <FoodAnswerSection></FoodAnswerSection>
        </div>
      </div>
    </div>
  );
};
