import { css } from "@emotion/css";
import GapItems from "../01_atoms/GapItems";
import NumberQuestion from "../01_atoms/NumberQuestion";
import Section from "../01_atoms/Section";

export default () => {
  return (
    <Section title="人数は何人ですか？">
      <GapItems gap="8px">
        <NumberQuestion label="良く食べる人"></NumberQuestion>
        <NumberQuestion label="普通の人"></NumberQuestion>
        <NumberQuestion label="少食の人"></NumberQuestion>
      </GapItems>
    </Section>
  );
};
