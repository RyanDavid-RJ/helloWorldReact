import '../componentes/home.css'

function Home() {

    const noticias = [
        {
            id: 1,
            imagem: "https://loremflickr.com/400/300/technology",
            titulo: "Nova IA revoluciona o mercado",
            descricao: "Uma nova tecnologia promete mudar a forma como usamos inteligência artificial."
        },
        {
            id: 2,
            imagem: "https://loremflickr.com/400/300/programming",
            titulo: "React domina o mercado",
            descricao: "React continua sendo uma das bibliotecas mais usadas do mundo."
        },
        {
            id: 3,
            imagem: "https://loremflickr.com/400/700/cybersecurity",
            titulo: "Segurança digital em alta",
            descricao: "Ataques cibernéticos aumentam e exigem mais proteção."
        }
    ];

    return (
        <div className="container">

            <div className="cards">
                {noticias.map(noticia => (
                    <div alt ={noticia.id}>
                        <img src={noticia.imagem} alt={noticia.titulo} className='cardImg' />
                        <h2 className='cardTitle'>{noticia.titulo}</h2>
                        <p className='cardDscr'>{noticia.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;