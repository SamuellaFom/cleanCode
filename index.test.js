const modules = require("./index");

test("Should return 0", () => {
  expect(modules.pokerHands([])).toBe(0);
});

test("Should return hand brelan given 30", () => {
  const brelanLand = [
    {
      value: 2,
      enseigne: {
        name: "Cœur",
        couleur: "rouge",
      },
    },
    {
      value: 2,
      enseigne: {
        name: "Pique",
        couleur: "noir",
      },
    },
    {
      value: 2,
      enseigne: {
        name: "Carreau",
        couleur: "noir",
      },
    },
    {
      value: 9,
      enseigne: {
        name: "Trèfle",
        couleur: "noir",
      },
    },
    {
      value: 9,
      enseigne: {
        name: "Pique",
        couleur: "noir",
      },
    },
  ];

  expect(modules.pokerHands(brelanLand)).toBe(30);
});
