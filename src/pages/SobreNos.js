import Cartao from "./Cartao";
import "./styles.css";

export default function App() {
  return (
    <div className="App">

      <img src="https://cronos.nimbusmeteorologia.com.br/static/media/nb-logo.d3f5fb20.jpg"></img>

      <h1>Sobre nos</h1>
      <p className="Texto">Como equipe especializada em projetos front-end, estamos empenhados na criação de um site de excelência para a renomada empresa Nimbus. Nosso grupo está dedicado a desenvolver uma plataforma online que não apenas represente fielmente a identidade e os valores da Nimbus, mas também ofereça uma experiência de usuário intuitiva e de alta qualidade. Estamos aplicando nossa expertise em design e desenvolvimento web para garantir que o site atenda às necessidades da empresa e de seus clientes, destacando-se pela funcionalidade, estética e acessibilidade. Nosso compromisso é entregar um produto final que eleve a presença online da Nimbus e impulsione sua interação com seu público-alvo de forma eficiente e impactante.</p>
      <p className="Texto">A Nimbus é reconhecida como uma empresa especializada na distribuição precisa de dados meteorológicos em tempo real, atendendo às necessidades de uma variedade de empresas e clientes. Com uma abordagem focada na entrega de informações meteorológicas atualizadas e confiáveis, a Nimbus se destaca por sua capacidade de fornecer dados essenciais para apoiar decisões críticas em diversos setores. Sua expertise na coleta e disponibilização de informações meteorológicas é fundamental para auxiliar organizações a melhorarem seu planejamento estratégico e operações diárias.</p>

      <h1>Nosso time</h1>
      <div className="Cartoes">
      <Cartao
        name="John Doe"
        position="CEO"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
        imageUrl="https://yt3.googleusercontent.com/ytc/APkrFKYABwp4e-BVqD5bFcodwOawuAHvbBSbVZBgD7o_oQ=s900-c-k-c0x00ffffff-no-rj"
      />
      <Cartao
        name="John Doe"
        position="CEO"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
        imageUrl="https://i1.sndcdn.com/artworks-FozYneuRIHafAthN-Wdpe9A-t500x500.jpg"
      />
      <Cartao
        name="John Doe"
        position="CEO"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
        imageUrl="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/07/07/fef3ba07-78ab-4b6f-98bd-c4281caa0fa4_2b7d0fc3.jpg?itok=cGBIcWdn&v=1688725357"
      />
      </div>
    </div>
  );
}
