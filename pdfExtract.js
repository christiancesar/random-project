const PDFExtract = require('pdf.js-extract').PDFExtract;
const fs = require('fs');

const pdfExtract = new PDFExtract();

const options = {}; /* see below */
pdfExtract.extract('pdfData.pdf', options, async (err, data) => {
  if (err) return console.log(err);

  // fs.writeFileSync('./data-extract.json', JSON.stringify(data, null, 2))
  const pages = data.pages;
  pages.map((page) => {
    const content = page.content;
    content.map((content) => {
      const budgets = [] 

      const find = content.str.match(/(NR\. [0-9]{5})/g)
      if (find !== -1 && find !== null) {
        const budgetId = find[0]
        const budgetFormatted = budgetId.replace('NR. ', '')
        console.log(budgetFormatted)
      }
    })
  })
  // console.log(JSON.stringify(data, null, 2));
});