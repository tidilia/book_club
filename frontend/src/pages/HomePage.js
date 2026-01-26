import PageTitle from "../components/UI/PageTitle/PageTitle"
import TextBlock from "../components/UI/TextBlock/TextBlock"

function HomePage(){
    return(
        <div>
            <PageTitle size="h1">Книжный клуб "Book Club Ufa"</PageTitle>
            <TextBlock>это место, где участники клуба после прочтения выбранной модератором книги обсуждают её, делятся своими мыслями, рассуждениями, анализируют через призму современных социальных проблем.</TextBlock>
        </div>
    )
}

export default HomePage