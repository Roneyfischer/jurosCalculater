var verifyTwoDataMatch = function (data1, data2) {
  if (data1 == data2) {
    console.log("data1: ".concat(data1, " --- dado2:").concat(data2));
    return true;
  }
  console.log("data1: ".concat(data1, " --- dado2:").concat(data2, " +++ fora do if"));
  return false;
};

export default { verifyTwoDataMatch };
