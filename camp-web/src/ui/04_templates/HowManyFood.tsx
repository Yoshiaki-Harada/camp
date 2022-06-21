import { css } from "@emotion/css";
import { useContext, onMount } from "solid-js";
import { LoadFoodContext } from "../../container";
import FoodAnswerSection from "../03_organizms/FoodAnswerSection";
import FoodQuestionSection from "../03_organizms/FoodQuestionSection";
import PeopleQuestionSection from "../03_organizms/PeopleQuestionSection";

export default () => {
  const { loadFoods } = useContext(LoadFoodContext);
  onMount(async () => {
    await loadFoods();
  });
  return (
    <>
      <h2>How much Food shoud We Buy?</h2>
      <div class={body}>
        <div class={questions}>
          <PeopleQuestionSection></PeopleQuestionSection>
          <FoodQuestionSection></FoodQuestionSection>
        </div>
        <div class={answer}>
          <FoodAnswerSection></FoodAnswerSection>
        </div>
      </div>
    </>
  );
};

const body = css`
  padding: 10px;
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const questions = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 64px;
`;

const answer = css`
  background-color: whitesmoke;
`;
