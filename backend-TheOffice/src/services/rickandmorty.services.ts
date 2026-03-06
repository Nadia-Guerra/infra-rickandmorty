
const API_URL = process.env.RICK_AND_MORTY_API_URL;

export const getAllCharacters = async (page:number) => {
  const response = await fetch(`${API_URL}/character?page=${page}`);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
};


export const getCharacterById = async (id: number) => {
  const response = await fetch(`${API_URL}/character/${id}`);

  if (!response.ok) {
    throw new Error(`Personaje no encontrado: ${response.status}`);
  }

  return await response.json();

};

export const getAllEpisodes = async (page:number) => {
  const response = await fetch(`${API_URL}/episode?page=${page}`);

  if (!response.ok) {
    throw new Error(`Error al contactar RickAndMortyAPI: ${response.status}`);
  }

  return await response.json();
};


export const getAllLocations = async (page:number) => {
  const response = await fetch(`${API_URL}/location?page=${page}`);

  if (!response.ok) {
    throw new Error(`Error al contactar RickAndMortyAPI: ${response.status}`);
  }

  return await response.json();
};




