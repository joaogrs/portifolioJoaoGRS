import dataProjects from "../dataProjects";
import '../styles/cardsProject.css'

const CardsProject = () => { return dataProjects.map(project =>
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

export default CardsProject