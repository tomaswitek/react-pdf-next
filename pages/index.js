import React from "react";
import ReactPdf from "@react-pdf/renderer";
import PdfDocument from "../components/PdfDocument";

function IndexPage() {
  return null;
}

IndexPage.getInitialProps = async ({res}) => {
  const filename = "file.pdf";
  await ReactPdf.renderToFile(<PdfDocument />, filename);
  const string = await ReactPdf.renderToString(<PdfDocument />);
  res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
  res.setHeader("Content-Type", "application/pdf");
  res.end(string);
};

export default IndexPage;
