import { useParams } from "react-router-dom";

function GenreMeetingsPage() {
  const { genreId } = useParams(); // получаем id из URL

  return (
    <div>
      <h1>Жанр {genreId}</h1>
      {/* здесь позже загрузка данных по жанру */}
    </div>
  );
}

export default GenreMeetingsPage;