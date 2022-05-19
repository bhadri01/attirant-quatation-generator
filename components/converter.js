import { PDFDocument} from "pdf-lib";
import fontkit from '@pdf-lib/fontkit';
import { saveAs } from "file-saver";
import xandy from "./text-x-y";

export default async function generatePDF(Qdata) {
  const existingPdfBytes = await fetch("/pd.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  //get font
  const fontBytes = await fetch("/lote.ttf").then((res) => res.arrayBuffer());

  // Embed our custom font in the document
  const Font = await pdfDoc.embedFont(fontBytes);

  // Draw a string of text diagonally across the first page
  xandy(firstPage, Qdata, Font);

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new Blob([pdfBytes], {
    type: "application/pdf;charset=utf-8",
  });
  saveAs(file, "qutation.pdf");
}
