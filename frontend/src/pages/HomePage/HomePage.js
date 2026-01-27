import "./HomePage.css"
import PageTitle from "../../components/UI/PageTitle/PageTitle"
import TextBlock from "../../components/UI/TextBlock/TextBlock"
import Button from "../../components/UI/Button/Button"
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <PageTitle size="h1">Книжный клуб "Book Club Ufa"</PageTitle>
            <section className="home-main">
                <div className="home-image">
                    <img
                        src="images/homePageImage.jpg"
                        alt="Books">

                    </img>
                </div>
                <div className="home-description">
                    <TextBlock>это место, где участники клуба после прочтения выбранной модератором книги обсуждают её,
                        делятся своими мыслями, рассуждениями, анализируют через призму современных социальных проблем.
                    </TextBlock>
                </div>
            </section>
            <section className="home-buttons">
                <Button
                    onClick={() => {
                        navigate(`genres/`);
                    }}>
                    Записаться на встречу
                </Button>
            </section>
        </>
    )
}

export default HomePage