const categories = [
  {
    name: "Wash, Dry, Fluff & Fold",
    id: "wash-dry-fluff-fold-serv01",
    services: [
      {
        name: "Wash & Dry Service",
        id: "wash-dry-category1",
        shortDescr: "Wash & Dry",
        desc: "We take care of the washing and drying of your clothes to a very high standard.",
        subservice: {
          extra: "With every 7 orders you get 1 order for free",
        },
      },
      {
        name: "Fluff, & Fold Service",
        id: "fluff-fold-category02",
        shortDescr: "Fluff & Fold",
        desc: " In this service your clothes will also be picked directly from your home and delivered back to you after cleaning and drying them with folded nicely.",
        subservice: {
          extra: "With every 7 orders you get 1 order for free",
        },
      },
    ],
  },
  {
    name: "Lorem, ipsum dolor",
    id: "Lorem-ipsum-dolor-sit01",
    services: [
      {
        name: "amet consectetur adipisicing",
        id: "owedkddie01",
        shortDescr: "Blablabla",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, excepturi provident",
        subservice: {
          extra: "With every 7 orders you get 1 order for free",
        },
      },
      {
        name: "bj3eu3eu3i3",
        id: "oeekf0dkkd02",
        shortDescr: "Ohohoh",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio et sed enim id ab vitae dolorum consequuntur",
        subservice: {
          extra: "With every 7 orders you get 1 order for free",
        },
      },
    ],
  },
];

export function getService({ catId, serviceId }) {
  return categories
    .find(({ id }) => id === catId)
    .services.find(({ id }) => id === serviceId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
