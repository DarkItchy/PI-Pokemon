export const typesNames = (p) => {
  return p.types.map((t) => {
    const name = typeof t === "object" ? t.name : t;
    return name;
  });
};
export const filterType = (act, allP) => {
  return act.payload === "All"
    ? allP
    : allP.filter((p) => {
        const type = typesNames(p);
        const filterParam = type.includes(act.payload);
        return filterParam;
      });
};

export const filterCreated = (act, allP) => {
  if (act.payload === "All") return allP;
  else if (act.payload === "Db") return allP.filter((p) => p.createdInDb);
  else if (act.payload === "Api") return allP.filter((p) => !p.createdInDb);
};

export const orderName = (act, pok) => {
  if (act.payload === "ASC") {
    return pok.sort(function (a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
  }
  if (act.payload === "DES") {
    return pok.sort(function (a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase()< b.name.toLowerCase()) return 1;
      return 0;
    });
  } else return pok;
};

export const orderAttack = (act, pok) => {
  if (act.payload === "MAY") {
    pok.sort(function (a, b) {
      if (a.atk > b.atk) return -1;
      if (a.atk < b.atk) return 1;
      return 0;
    });
  }
  if (act.payload === "MEN") {
    return pok.sort(function (a, b) {
      if (a.atk > b.atk) return 1;
      if (a.atk < b.atk) return -1;
      return 0;
    });
  } else return pok;
};

export const getName = (act, pok) => {
  const pokemonByName = pok.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(act.payload)
    //pokemon.name.toLowerCase() === (act.payload)
  );
  return pokemonByName;
};
