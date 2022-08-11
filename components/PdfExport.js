import React from "react";
import Pdf from "react-to-pdf";

const options = {
  orientation: "p",
  unit: "mm",
  format: "a4",
  putOnlyUsedFonts: true,
  floatPrecision: 16,
};

function PdfExport({ targetRef, fileName }) {
  return (
    <Pdf options={options} targetRef={targetRef} filename={`${fileName}.pdf`}>
      {({ toPdf }) => (
        <button
          onClick={toPdf}
          className="p-2 font-semibold tracking-wide uppercase transition-all delay-100 rounded-tr-sm rounded-bl-sm shadow-sm shrink-0 hover:-translate-y-1 rounded-tl-2xl rounded-br-2xl bg-rose-500 text-neutral-800 hover:shadow-lg hover:bg-rose-400"
        >
          Download
        </button>
      )}
    </Pdf>
  );
}

export default PdfExport;
