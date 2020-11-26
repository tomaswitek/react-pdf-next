import React from "react";
import {Document, Page, View, Text} from "@react-pdf/renderer";

function PdfDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Hello World!</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;
