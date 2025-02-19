import React from "react";
import SubHeader from "./SubHeader";
import ProductHeader from "../../serviceProducts/ProductHeader";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "theme/useThemeStore";
import { DetailsDescription } from "../websiteTypes.styles";

interface Props {
  title: string;
  description: string;
}
const TitleDescription = ({ title, description }: Props) => {
  const { t: translate } = useTranslation();
  const { currentTheme } = useThemeStore();
  const translatedTitle = translate(title);
  const splitTitle = translatedTitle.split(" ");

  return (
    <>
      <div>
        <SubHeader title={translate("productTitle")} />
        <ProductHeader
          header={splitTitle[0]}
          focusedPart={`${splitTitle[1]} ${
            splitTitle.length > 2 ? splitTitle[2] : ""
          }`}
        />
      </div>
      <div style={{ maxWidth: "700px" }}>
        <SubHeader title={translate("productDestination")} />
        <DetailsDescription theme={currentTheme}>
          {translate(description)}
        </DetailsDescription>
      </div>
    </>
  );
};

export default TitleDescription;
