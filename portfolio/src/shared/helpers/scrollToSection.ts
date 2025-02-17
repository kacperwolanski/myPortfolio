export const scrollToSection = (
  sectionId: string,
  extraScrollOffset?: boolean
) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const yOffset = extraScrollOffset ? -450 : -250;
    const yPosition =
      sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
