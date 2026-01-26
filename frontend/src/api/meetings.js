const API_URL = "http://127.0.0.1:8000/api"

  export const getGenres = async () => {
  const res = await fetch("${API_URL}/genres/");

  if (!res.ok) {
    throw new Error("Ошибка загрузки жанров ${Error.arguments}")
  }

  const data = await res.json();
  console.log(res.json());

  // если DRF с пагинацией
  return data.results ?? data;
};
