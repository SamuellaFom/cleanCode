function pokerHands(hand) {
  let result = 0;

  const isBrelan = hand.some((card) => hand.filter((c) => c.value === card.value).length === 3,);

  const isColor = hand.some((card) => hand.filter((c) => c.enseigne.name === card.enseigne.name) === 5,);
  
  

  if (isBrelan) {
    result += 30;
  }

  if (isColor) {
    result += 45;
  }

  return result;
}
module.exports = { pokerHands };
