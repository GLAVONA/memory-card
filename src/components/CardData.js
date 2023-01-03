// const testFolder = "src/imgs";
// // const fs = require("fs");

// // const newCardData = [];

// // fs.readdirSync(testFolder).forEach((file, index) => {
// //   newCardData.push({ id: index, src: file });
// // });

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const images = importAll(require.context("../imgs", false, /\.jpeg/));

const cardDataArray = [
  { id: 0, name: "BIGJohnsonMcCoq.jpeg" },
  { id: 1, name: "BoredChiknYachtClub.jpeg" },
  { id: 2, name: "Chikn1231.jpeg" },
  { id: 3, name: "Chikn6297.jpeg" },
  { id: 4, name: "Chikn8921.jpeg" },
  { id: 5, name: "ChiknLittle.jpeg" },
  { id: 6, name: "CluckCluck9000.jpeg" },
  { id: 7, name: "Coluche.jpeg" },
  { id: 8, name: "CoqAuVin.jpeg" },
  { id: 9, name: "CoqdArgent.jpeg" },
  { id: 10, name: "FireandIceCream.jpeg" },
  { id: 11, name: "LeCoqGrande.jpeg" },
  { id: 12, name: "MotherClucker.jpeg" },
  { id: 13, name: "SuleimantheMeggnificient.jpeg" },
  { id: 14, name: "TeBTCSultan.jpeg" },
  { id: 15, name: "TheKaiser.jpeg" },
  { id: 16, name: "TheKernel.jpeg" },
];

export default cardDataArray;
