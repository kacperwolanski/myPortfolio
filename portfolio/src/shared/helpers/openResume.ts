export const openResume = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/KacperWolanski.pdf`;
  window.open(pdfUrl, "_blank");
};
