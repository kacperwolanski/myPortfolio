import { useThemeStore } from "theme/useThemeStore";
import {
  MyTechnologiesSection,
  SideShadow,
  TechnologiesContainer,
} from "../technologies.styles";
import SingleTechnology, { Technology } from "./SingleTechnology";
import { Box } from "@mui/material";

const TechnologiesList = ({ techList }: { techList: Technology[] }) => {
  const { currentTheme } = useThemeStore();

  return (
    <MyTechnologiesSection>
      <Box
        sx={{
          display: "flex",
          paddingX: "10px",
          overflow: "hidden",
        }}
      >
        <SideShadow theme={currentTheme} style={{ left: "-55px" }} />
        <TechnologiesContainer theme={currentTheme}>
          {techList.map((technology, index) => (
            <SingleTechnology technology={technology} key={index} />
          ))}
        </TechnologiesContainer>
        <SideShadow theme={currentTheme} style={{ right: "-50px" }} />
      </Box>
    </MyTechnologiesSection>
  );
};

export default TechnologiesList;
