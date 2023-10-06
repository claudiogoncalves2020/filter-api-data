function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((obj) => {
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
}
const data1 = [{ id: 1, price: 100 }, { price: 50 }];
const filteredData1 = filterApiData(data1, ["id"]);
console.log(filteredData1);

const data2 = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];
const filteredData2 = filterApiData(data2, ["id", "price"]);
console.log(filteredData2);
