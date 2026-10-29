const modules = require("./index");

test("Should return 0", () => {
  expect(modules.pokerHands([])).toBe(0);
});

test("Should return brelan hand given 30", () => {
  const brelanHand = [
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

  expect(modules.isBrelan(brelanHand)).toBe(true);
});

test("Should return color hand given 45", () => {
  const colorHand = [
    {
      value: 2,
      enseigne: {
        name: "Cœur",
        couleur: "rouge",
      },
    },
    {
      value: 3,
      enseigne: {
        name: "Cœur",
        couleur: "rouge",
      },
    },
    {
      value: 4,
      enseigne: {
        name: "Cœur",
        couleur: "rouge",
      },
    },
    {
      value: 5,
      enseigne: {
        name: "Cœur",
        couleur: "rouge",
      },
    },
    {
      value: 6,
      enseigne: {
        name: "Cœur",
        couleur: "rouge",
      },
    },
  ];

  expect(modules.isColor(colorHand)).toBe(true);
});

test("Should return some of hands given 75", () => {
  const hands = [
    [
      {
        value: 2,
        enseigne: {
          name: "Cœur",
          couleur: "rouge",
        },
      },
      {
        value: 3,
        enseigne: {
          name: "Cœur",
          couleur: "rouge",
        },
      },
      {
        value: 4,
        enseigne: {
          name: "Cœur",
          couleur: "rouge",
        },
      },
      {
        value: 5,
        enseigne: {
          name: "Cœur",
          couleur: "rouge",
        },
      },
      {
        value: 6,
        enseigne: {
          name: "Cœur",
          couleur: "rouge",
        },
      },
    ],
    [
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
    ],
  ];
  expect(modules.pokerHands(colorHand)).toBe(75);
});
