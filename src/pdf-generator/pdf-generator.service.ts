import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as PdfPrinter from 'pdfmake';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PdfGeneratorService {
  generatePdf() {
    const fonts = {
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
      }
    };
    const printer = new PdfPrinter(fonts);

    const docDefinition = {
      pageMargins: [ 40, 60, 40, 60 ],
      header: [
        {
          image: 'data:image/jpeg;base64,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',
          fit: [100, 50],
          style: 'header'
        },
      ],
      content: [
        { text: 'Last Trades', style: 'title' },
        // { image: 'https://ctrading.io/wp-content/uploads/2020/05/logohorizontalweb-e1589380697796.png' },
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*', '*' ],

            body: [
              [ 'Exchange', 'Market', 'Amount', 'Price', 'Finished Date' ],
              [ 'Binance', 'DASH-BTC', '0,03', '0,007381 DASH', '2020-09-08 11:29:29' ],
              [ 'Binance', 'BCH-BTC', '0,03', '0,02219 BCH', '2020-09-08 11:22:23' ],
              [ 'Binance', 'NPXS-ETH', '45.455,546', '0,00000043 NPXS', '2020-09-07 10:02:35' ],
              [ 'HitBTC', 'ADA-BTC', '10', '0,00000885 ADA', '2020-09-07 09:47:14' ],
              [ 'Binance', 'GNT-BTC', '20', '0,00001102 GNT', '2020-09-07 09:27:52' ]
            ],
          },
        },
        // {text: 'google', link: 'http://google.com', pageBreak: 'before',},
        // { qr: 'text in QR', foreground: 'green', background: 'white' },
      ],
      defaultStyle: {
        font: 'Helvetica',
        fontSize: 10,
      },
      styles: {
        header: {
          alignment: 'right',
          margin: 20
        },
        title: {
          fontSize: 15,
          margin: [0, 10, 0, 20]
        }
      }
    };

    const tableLayouts = {
      exampleLayout: {
        hLineWidth: function (i, node) {
          if (i === 0 || i === node.table.body.length) {
            return 0;
          }
          return (i === node.table.headerRows) ? 2 : 1;
        },
        vLineWidth: function (i) {
          return 0;
        },
        hLineColor: function (i) {
          return i === 1 ? 'black' : '#aaa';
        },
        paddingLeft: function (i) {
          return i === 0 ? 0 : 8;
        },
        paddingRight: function (i, node) {
          return (i === node.table.widths.length - 1) ? 0 : 8;
        }
      }
    };

    // const options = {}
    let file_name = './src/pdfs/PDF' + uuidv4() + '.pdf';
    const pdfDoc = printer.createPdfKitDocument(docDefinition, {tableLayouts: tableLayouts});
    pdfDoc.pipe(fs.createWriteStream(file_name));
    pdfDoc.end();
    return {'file_name': file_name};
  }
}
