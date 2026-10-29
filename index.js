const isBrelan = (hand) => {
  return hand.some((card) => hand.filter((c) => c.value === card.value).length === 3);
};

const isColor = (hand) => {
  return hand.some(
    (card) => hand.filter((c) => c.enseigne.name === card.enseigne.name) === 5,
  );
};

function pokerHands(hands) {
  let resultFinal = 0;

  for (let i = 0; i < hands.length; i++) {
    
    if (isBrelan(hands[i])) {
      resultFinal += 30;
    }

    if (isColor(hands[i])) {
      resultFinal += 45;
    }
  }

  return resultFinal;
}
module.exports = { pokerHands, isBrelan, isColor };
