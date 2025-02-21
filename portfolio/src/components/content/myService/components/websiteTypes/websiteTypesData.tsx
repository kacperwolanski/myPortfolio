import { ImageIcon, React2Icon, StarsIcon } from "shared/assets/icons/Icons";

export interface WebsiteType {
  title: string;
  icon: JSX.Element;
  linkTo: string;
  background?: string;
}

export interface WebsitesDetails {
  title: string;
  description: string;
  features: string[];
  example: string;
  linkToPage: string;
  hoverTitle: string;
}

export const websitesDetails = {
  basicDetails: {
    title: "basicWebsiteTitle",
    description: "basicDestination",

    features: [
      "upTo3sites",
      "readyTemplateDesign",
      "basicSeo",
      "responsiveDesign",
      "wpBased",
      "time4to7days",
      "contactForm",
    ],
    example:
      "https://github.com/user-attachments/assets/3eb20c46-c057-4718-837d-f873b61cf517",
    hoverTitle: "basicHoverTitle",
    linkToPage: "https://kiliauto.pl/",
  },
  advancedDetails: {
    title: "advancedWebsiteTitle",
    description: "advancedDestination",
    features: [
      "upTo6sites",
      "addTheme",
      "basicSeo",
      "responsiveDesign",
      "figmaDesign",
      "addTranslations",
      "addAnimations",
      "time7to14days",
      "add3D",
    ],

    example:
      "https://github.com/user-attachments/assets/e16e5e37-3ded-4534-92f2-8349d3ad749b",
    hoverTitle: "advancedHoverTitle",
    linkToPage: "https://kacperwolanski.github.io/myPortfolio/",
  },
  reactDetails: {
    title: "reactWebsiteTitle",
    description: "reactDestination",
    features: [
      "figmaDesign",
      "basicSeo",
      "responsiveDesign",
      "addTheme",
      "addTranslations",
      "addAnimations",
      "addFeatures",
      "add3D",
      "time14daysPlus",
    ],
    example:
      "https://github.com/user-attachments/assets/81d1b570-5efb-41e1-a3b4-bb2e41b0350f",
    hoverTitle: "reactHoverTitle",
    linkToPage: "https://www.turmsride.com/",
  },
};

export const websitesTypes = [
  {
    title: "basicWebsite",
    icon: <ImageIcon />,
    linkTo: websitesDetails.basicDetails.title,
  },
  {
    title: "advancedWebsite",
    icon: <StarsIcon />,
    linkTo: websitesDetails.advancedDetails.title,
    background:
      "linear-gradient(135deg, #748C94, #96AAB4,rgba(247, 248, 249, 0.46))",
  },
  {
    title: "reactApp",
    icon: <React2Icon />,
    linkTo: websitesDetails.reactDetails.title,
    background: "linear-gradient(135deg, #245974, #2e7a94, #39a3c5)",
  },
];
