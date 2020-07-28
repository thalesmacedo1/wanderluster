import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background: "#121212" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Voando com drone na praia mais bonita de Bali. Filmamos os surfistas pegando altas ondas em Uluwatu, Divirta-se assistindo o vlog sobre o meu dia a dia na ilha mais famosa da Indonésia."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />



      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Footer />

    </div>
  );
}

export default App;