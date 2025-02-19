import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  title: string;
}
const SubHeader = ({ title }: Props) => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  return (
    <div
      style={{ color: currentTheme.palette.primary.main, marginBottom: "15px" }}
    >
      {translate(title)}
    </div>
  );
};

export default SubHeader;
