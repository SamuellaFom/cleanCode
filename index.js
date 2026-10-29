const isBrelan = (hand) => {
  hand.some((card) => hand.filter((c) => c.value === card.value).length === 3);
};

const isColor = (hand) => {
  hand.some(
    (card) => hand.filter((c) => c.enseigne.name === card.enseigne.name) === 5,
  );
};

function pokerHands(hand) {
  let resultFinal = 0;

  for (let i = 0; i < hand.length; i++) {
    if (isBrelan) {
      resultFinal += 30;
    }

    if (isColor) {
      resultFinal += 45;
    }
  }

  return resultFinal;
}
module.exports = { pokerHands, isBrelan, isColor };
