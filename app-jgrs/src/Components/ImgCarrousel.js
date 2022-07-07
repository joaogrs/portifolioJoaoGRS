import Carousel from 'react-elastic-carousel';
import dataProjects from "../dataProjects";
import '../styles/imgCarrousel.css'

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1400, itemsToShow: 4}
];

const ImgCarrousel = () => {
    return (
      <div className='containerCarousel' id='projects'>
        <Carousel breakPoints={breakPoints}>
            {dataProjects.map((project) => 
            <div class="card">
              <div class="card-img-wrapper">
                <img src='https://www.targethost.com.br/site/wp-content/uploads/2019/03/homem-negro-programando-computador.jpg' alt={`Imagem do projeto ${project.projectTitle}`} />
              </div>
              <div class="card-info">
                <h2>{project.projectTitle}</h2>
                <h3>{project.usedTools}</h3>
                <p>{project.projectDescription}</p>
                <button class="btn">Saiba Mais</button>
              </div>
            </div>)}
        </Carousel>
        </div>
    )
}

export default ImgCarrousel