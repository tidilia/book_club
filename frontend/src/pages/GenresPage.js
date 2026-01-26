import { useEffect, useState } from "react"; 
import { GENRES_URL } from "../API";
import { data, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import ItemsList from "../components/UI/ItemsList/ItemsList";
import PageTitle from "../components/UI/PageTitle/PageTitle";

function GenresPage(){
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(GENRES_URL)
    .then((Response) => {
      if(!Response.ok) {
        throw new Error("Ошибка загрузки списка направлений")
      }
      return Response.json();
    })
    .then((data) => {
      setGenres(data);
    })
    .catch((err)=>{
      setError(err.message);
    });
  }, []);

  if (error) return <p>Ошика: {error}</p>;

  return (
    <div>
      <PageTitle size="h1">Направления</PageTitle>
      <ItemsList>
        {genres.map((genre) => (
          <Button
          variant="genre"
          key={genre.id}
          onClick={()=> {
            console.log(genre.id);
            navigate(`/genres/${genre.id}`);
          }}>
            {genre.name}
          </Button>
        ))}
      </ItemsList>
    </div>
  )
}

export default GenresPage;