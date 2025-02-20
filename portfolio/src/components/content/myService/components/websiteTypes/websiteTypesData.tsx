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
      "https://github.com/user-attachments/assets/f8c2407c-eab8-404a-a5f1-7173803c5f79",
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
      "https://github.com/user-attachments/assets/a4b642b6-e7b6-43e5-a8bd-9fc5e6b26b1a",
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
      "https://github.com/user-attachments/assets/36d30db2-d42a-4e40-a81b-06fdf3764bb7",
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
