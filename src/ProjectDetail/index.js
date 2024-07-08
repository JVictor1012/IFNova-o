import './styles.css';
import { Component } from 'react';
import { Header } from '../components/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ButtonDownload from '../components/options-button';
import ButtonCode from '../components/linkCode-button';
import ecocampus from '../imagens/bannerEcoCampus.png'

class ProjectDetail extends Component {
  state = { 
    posts: [],
    allposts: [],
    page: 0,
    postsPerPage: 9
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsjson = await posts.json();
    const photosjson = await photos.json();

    const { postsPerPage, page } = this.state;

    const postsAndPhotos = postsjson.map((post, index) => {
      return { ...post, cover: photosjson[index].url }
    });

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allposts: postsAndPhotos
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container-page'>
          <div className='image-container'>
            <img className='image' src={ecocampus} align="right" alt="EcoCampus" />
            <p id='disclaimer'>Este projeto precisa de colaboradores!</p>

            <div className='action-button'>
              <button id='Favorito'>☆ Favoritar</button>
              <button>Se Candidatar</button>
              <button>Entrar em Contato</button>
            </div>

            <h3 align="right" className='text-meta'>Meta do Projeto:</h3>
            <ProgressBar />

            <ButtonDownload />
            <ButtonCode />
          </div>
          
          <div className='texto'>
            <h1>EcoCampus - Sustentabilidade e Inovação no Campus</h1>
            <p><strong>Objetivo:</strong> Criar uma plataforma colaborativa e interativa dentro da universidade para promover práticas sustentáveis e a conscientização ambiental, integrando tecnologia, inovação e educação.</p>
            <p><strong>Justificativa:</strong> A sustentabilidade é uma preocupação crescente, e as universidades têm um papel crucial em promover práticas ecológicas. O projeto EcoCampus visa transformar o campus em um ambiente mais sustentável, incentivando a participação ativa de alunos, professores e empresas parceiras.</p>
          </div>

          <div className='sobre'>
            <h2>Informações sobre o Projeto</h2>
            <p>EcoCampus é uma iniciativa para criar uma plataforma que promova a sustentabilidade e a inovação dentro do campus universitário. O projeto integra diversas funcionalidades, como um mapa interativo do campus com pontos de coleta seletiva, estações de recarga para veículos elétricos, e um portal para que os alunos possam compartilhar e desenvolver ideias sustentáveis.</p>
            <p>Através de parcerias com empresas e ONGs, buscamos financiar iniciativas sustentáveis e organizar desafios de inovação focados na sustentabilidade, oferecendo premiações e reconhecimento para os projetos mais impactantes.</p>
          </div>

          <div className='integrantes'>
            <h2>Integrantes</h2>
            <div className='integrante'>
              <img src='aluno1.jpg' alt='Foto do aluno 1' />
              <div className='integrante-details'>
                <p><strong>Nome:</strong> João Silva</p>
                <p><strong>Turma:</strong> 3A</p>
                <p><strong>Curso:</strong> Engenharia Ambiental</p>
                <p><strong>Participação:</strong> 40%</p>
              </div>
            </div>
            <div className='integrante'>
              <img src='aluno2.jpg' alt='Foto do aluno 2' />
              <div className='integrante-details'>
                <p><strong>Nome:</strong> Maria Santos</p>
                <p><strong>Turma:</strong> 2B</p>
                <p><strong>Curso:</strong> Ciências da Computação</p>
                <p><strong>Participação:</strong> 30%</p>
              </div>
            </div>
            <div className='integrante'>
              <img src='aluno3.jpg' alt='Foto do aluno 3' />
              <div className='integrante-details'>
                <p><strong>Nome:</strong> Pedro Lima</p>
                <p><strong>Turma:</strong> 4C</p>
                <p><strong>Curso:</strong> Design Gráfico</p>
                <p><strong>Participação:</strong> 20%</p>
              </div>
            </div>
            <div className='integrante'>
              <img src='aluno4.jpg' alt='Foto do aluno 4' />
              <div className='integrante-details'>
                <p><strong>Nome:</strong> Ana Costa</p>
                <p><strong>Turma:</strong> 1D</p>
                <p><strong>Curso:</strong> Administração</p>
                <p><strong>Participação:</strong> 10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectDetail;
