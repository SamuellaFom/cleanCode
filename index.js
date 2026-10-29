function pokerHands(hand) {
  const estBrelan = brelanLand.some(
    (carte) => brelanLand.filter((c) => c.value === carte.value).length === 3,
  );

  if (estBrelan) {
    return true
  }

  return 0;
}
module.exports = { pokerHands };
