const categories = [
  {
    name: "Wash, Dry, Fluff & Fold",
    id: "wash-dry-fluff-fold-serv01",
    sessions: [
      {
        name: "Wash & Dry Service",
        id: "wash-dry-category1",
        desc: "We take care of the washing and drying of your clothes to a very high standard.",
      },
      {
        name: "Fluff, & Fold Service",
        id: "fluff-fold-category02",
        desc: " In this service your clothes will also be picked directly from your home and delivered back to you after cleaning and drying them with folded nicely.",
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
