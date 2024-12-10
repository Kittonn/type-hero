type GroceryList = {
  [item: string]: number;
};

type InappropriateActionBySituation = {
  [item: string]: string[];
};

type CharactersById = {
  [id: number]: {
    id: number;
    name: string;
    status: string;
    species: string;
  };
};
