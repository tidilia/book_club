import React, { useEffect, useState } from "react";
import { getGenres } from "../api/meetings";
import Button from "../components/UI/GenreButton/Button";

function GenresPage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres(); // ждём данные
        setGenres(data);                // кладём МАССИВ
      } catch (error) {
        console.error("Ошибка загрузки жанров:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h1>Жанры</h1>

      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant="genre"
          onClick={() => console.log("Жанр выбран:", genre.name)}
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
}

export default GenresPage;