import { useThemeStore } from "theme/useThemeStore";
import {
  MyTechnologiesSection,
  SideShadow,
  TechnologiesContainer,
} from "../technologies.styles";
import SingleTechnology, { Technology } from "./SingleTechnology";

const TechnologiesList = ({ techList }: { techList: Technology[] }) => {
  const { currentTheme } = useThemeStore();

  const wrapperSx = {
    display: "flex",
    paddingX: "10px",
    overflow: "hidden",
  };
  return (
    <MyTechnologiesSection>
      <div style={wrapperSx}>
        <SideShadow theme={currentTheme} style={{ left: "-55px" }} />
        <TechnologiesContainer theme={currentTheme}>
          {techList.map((technology, index) => (
            <SingleTechnology technology={technology} key={index} />
          ))}
        </TechnologiesContainer>
        <SideShadow theme={currentTheme} style={{ right: "-50px" }} />
      </div>
    </MyTechnologiesSection>
  );
};

export default TechnologiesList;
