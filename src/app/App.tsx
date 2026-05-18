import { RetroWindow } from "./components/RetroWindow";
import { ToolItem } from "./components/ToolItem";
import { VideoPlayer } from "./components/VideoPlayer";
import svgPaths from "../imports/Frame2147224234/svg-26h9m0jbr5";
import imgRectangle34658916 from "../imports/Frame2147224234/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle34658902 from "../imports/Frame2147224234/6765e429a0161c0496d3576ebdc07f64750ebfdc.png";
import imgPersonagens from "../assets/personagens.png";
import imgSnappy from "../assets/snappy.jpg";

function GatorLabsLogo() {
  return (
    <div className="relative w-[427.754px] h-[175.09px] mb-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342.203 140.072">
        <g>
          <path d={svgPaths.p30b27690} fill="#F05524" />
          <path d={svgPaths.p256b48c0} fill="#F05524" />
          <path d={svgPaths.p35a2d200} fill="#F05524" />
          <path d={svgPaths.p6d9e100} fill="#F05524" />
          <path d={svgPaths.p1e9a5872} fill="#F05524" />
          <path d={svgPaths.p21adb400} fill="#F05524" />
          <path d={svgPaths.p2d9ae680} fill="#F05524" />
          <path d={svgPaths.pe0c4870} fill="#F05524" />
          <path d={svgPaths.p10d8b400} fill="#F05524" />
          <path d={svgPaths.p3eff6800} fill="#F05524" />
          <path d={svgPaths.pb2cf00} fill="#F05524" />
          <path d={svgPaths.p2d4aa700} fill="#F05524" />
          <path d={svgPaths.p32add300} fill="#F05524" />
          <path d={svgPaths.p261bf520} fill="#F05524" />
          <path d={svgPaths.p141bba40} fill="#F05524" />
          <path d={svgPaths.pee3f380} fill="#F05524" />
          <path d={svgPaths.p3cc99c00} fill="#F05524" />
          <path d={svgPaths.p3e9d100} fill="#F05524" />
          <path d={svgPaths.p3b1cf6d0} fill="#F05524" />
          <path d={svgPaths.p28498b80} fill="#F05524" />
          <path d={svgPaths.p23d75000} fill="#F05524" />
          <path d={svgPaths.p2a1a1c80} fill="#F05524" />
          <g>
            <path d={svgPaths.p36481780} fill="#F05524" />
            <path d={svgPaths.p15035500} fill="#F05524" />
            <path d={svgPaths.p9b55100} fill="#F05524" />
            <path d={svgPaths.p22b33100} fill="#F05524" />
            <path d={svgPaths.p3a203400} fill="#F05524" />
            <path d={svgPaths.p273ae200} fill="#F05524" />
            <path d={svgPaths.p36473d00} fill="#F05524" />
            <path d={svgPaths.p5b4bf00} fill="#F05524" />
            <path d={svgPaths.p147f1100} fill="#F05524" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuButton() {
  return (
    <svg className="block size-[25px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9992 30.9992">
      <path d={svgPaths.p2d999b80} fill="#e75726" />
    </svg>
  );
}

export default function App() {
  const tools = [
    { name: "Dokploy", description: "Plataforma auto-hospedada para implantar apps, bancos e Docker." },
    { name: "n8n", description: "Automatiza fluxos conectando APIs, apps e IA visualmente." },
    { name: "Baserow", description: "Banco de dados no-code e open-source, alternativa ao Airtable." },
    { name: "RustFS", description: "Armazenamento de objetos S3, aberto, rápido e compatível com nuvem." },
    { name: "Open WebUI", description: "Interface self-hosted para usar modelos de IA locais ou remotos." },
    { name: "ComfyUI", description: "Motor visual por nós para criar imagens, vídeo, áudio e 3D." },
    { name: "Dify", description: "Plataforma aberta para criar agentes, workflows e aplicações com LLMs." },
    { name: "Penpot", description: "Plataforma open-source para design, protótipos e colaboração de produtos digitais." },
    { name: "AFFiNE", description: "Workspace open-source para documentos, quadros brancos, bases e IA." },
    { name: "Grist", description: "Planilha relacional que combina flexibilidade de tabela com banco de dados." },
  ];

  return (
    <div className="bg-[#00201c] min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pt-[13px] bg-gradient-to-b from-[#00201c] from-[3.276%] via-[#005c54] via-[74.181%] to-[#f05524] flex flex-col items-center overflow-hidden">
        {/* Grid texture overlay — mobile (10 colunas) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] lg:hidden"
          style={{
            backgroundImage: `linear-gradient(to right, #c4b597 1px, transparent 1px), linear-gradient(to bottom, #c4b597 1px, transparent 1px)`,
            backgroundSize: '44px 44px'
          }}
        />
        {/* Grid texture overlay — desktop (15 colunas) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] hidden lg:block"
          style={{
            backgroundImage: `linear-gradient(to right, #c4b597 1px, transparent 1px), linear-gradient(to bottom, #c4b597 1px, transparent 1px)`,
            backgroundSize: '66.67px 66.67px'
          }}
        />

        {/* Menu Button */}
        <div className="absolute top-[32px] left-1/2 -translate-x-1/2 z-50">
          <MenuButton />
        </div>

        {/* Logo and content container */}
        <div className="pt-[90px] flex flex-col items-center gap-[16px] px-4 z-10 w-full">
          <div className="scale-[0.9] sm:scale-100 lg:scale-125">
            <GatorLabsLogo />
          </div>
          <p className="font-['Geist_Mono',sans-serif] text-[16px] sm:text-[18px] lg:text-[24px] leading-[1.4] text-[#c4b597] text-center max-w-[420px] lg:max-w-[700px] px-4 lg:mt-[24px]">
            Aula gratuita sobre Engenharia Criativa e o novo perfil de profissional que o mercado precisa.
          </p>
          <a href="#player" className="inline-flex items-center justify-center bg-[#e75726] border border-[#00201c] shadow-[4px_4px_0px_#00201c] h-[39px] lg:h-[45px] px-[15px] lg:px-[20px] py-[4px] hover:shadow-[2px_2px_0px_#00201c] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] lg:text-[14px] leading-[1.4] text-[#00201c]">ASSISTIR AULA</p>
          </a>
        </div>

        {/* Personagens image at the bottom of the hero */}
        <img
          src={imgPersonagens}
          alt="Leo Becker e mascote GatorLabs"
          className="mt-[24px] lg:mt-[32px] w-full max-w-[432px] lg:max-w-[816px] block z-10"
        />
      </div>

      {/* Video Section title and description */}
      <div id="player" className="mx-[16px] pt-[40px] pb-[32px] max-w-[440px] lg:max-w-[1000px] sm:mx-auto">
        <div className="flex items-center gap-[7px] mb-[12px]">
          <div className="bg-[#e75726] size-[10px] lg:size-[14px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[14px] lg:text-[16px] leading-[1.4] text-[#c4b597]">A AULA</p>
        </div>
        <h2 className="font-['Big_Shoulders',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[64px] leading-[1.2] text-[#c4b597] max-w-[337px] lg:max-w-[900px]">
          A nova categoria de profissional que a indústria criativa demanda
        </h2>
        <p className="font-['Geist_Mono',sans-serif] text-[14px] lg:text-[16px] leading-[1.5] text-[#c4b597] max-w-[332px] lg:max-w-[600px] mt-[18px]">
          Nesta superaula gratuita, Leo Becker destrincha os principais conceitos da Engenharia Criativa, o campo que surge com o avanço da tecnologia e mantém o olhar afiado para design e inovação de negócios.
        </p>
      </div>

      {/* Video Player Window */}
      <div className="mx-auto w-[calc(100%-32px)] max-w-[440px] lg:max-w-[1000px]">
        <RetroWindow title="AULA GRATUITA" contentClassName="p-0">
          <VideoPlayer videoId="5XxvwS7M9lg" />
        </RetroWindow>
      </div>

      {/* Section title and description */}
      <div className="mx-[16px] pt-[40px] pb-[32px] max-w-[440px] lg:max-w-[1000px] sm:mx-auto">
        <div className="flex items-center gap-[7px] mb-[12px]">
          <div className="bg-[#e75726] size-[10px] lg:size-[14px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[14px] lg:text-[16px] leading-[1.4] text-[#c4b597]">FERRAMENTAS</p>
        </div>
        <h2 className="font-['Big_Shoulders',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[64px] leading-[1.2] text-[#c4b597] max-w-[337px] lg:max-w-[900px]">
          As 10 principais ferramentas do engenheiro criativo
        </h2>
        <p className="font-['Geist_Mono',sans-serif] text-[14px] lg:text-[16px] leading-[1.5] text-[#c4b597] max-w-[332px] lg:max-w-[600px] mt-[18px]">
          Selecionamos as ferramentas gratuitas que não podem faltar no stack do engenheiro criativo, abrindo um novo leque de possibilidades para projetos que unem design e tecnologia.
        </p>

        <a
          href="https://www.hostgator.com.br/52667-13-3-12.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#e75726] border border-[#00201c] shadow-[4px_4px_0px_#00201c] h-[39px] lg:h-[45px] px-[15px] lg:px-[20px] py-[4px] mt-[24px] hover:shadow-[2px_2px_0px_#00201c] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] lg:text-[14px] leading-[1.4] text-[#00201c]">CONTRATAR VPS</p>
        </a>
      </div>

      {/* Tools Section */}
      <div className="relative mt-[20px] mx-[16px] max-w-[440px] lg:max-w-[1000px] sm:mx-auto shadow-[6px_6px_0px_#00201c]">
        {/* Section header */}
        <div className="bg-[#c4b597] border border-[#00201c] h-[32px] flex items-center px-[10px]">
          <div className="bg-[#00201c] size-[10px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[12px] leading-[1.4] text-[#00201c] ml-[4px]">TOOLS</p>
        </div>

        {/* Tools list container */}
        <div className="bg-[#c4b597] border border-[#00201c] border-t-0 pt-[2px] px-[8px] pb-[8px] sm:pt-[4px] sm:px-[16px] sm:pb-[16px]">
          <div className="flex flex-col">
            {tools.map((tool, index) => (
              <div key={index}>
                <div className="py-[12px] sm:py-[16px]">
                  <ToolItem number={index + 1} name={tool.name} description={tool.description} />
                </div>
                {index < tools.length - 1 && (
                  <div className="w-full h-[1px]">
                    <svg className="block w-full h-[1px]" preserveAspectRatio="none" viewBox="0 0 407 1">
                      <line stroke="#00201c" strokeDasharray="2 2" x1="0" y1="0.5" x2="407" y2="0.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Section */}
      <div className="relative mt-[50px] px-[16px] max-w-[440px] lg:max-w-[1000px] mx-auto" style={{ minHeight: '360px' }}>
        {/* Desktop: container centralizado com sobreposição */}
        <div className="relative lg:w-[620px] lg:h-[580px] lg:mx-auto">
          {/* Segunda foto — atrás */}
          <div className="absolute top-[64px] right-[16px] w-[200px] sm:w-[240px] lg:w-[320px] lg:top-[48px] lg:right-0 z-0 shadow-[6px_6px_0px_rgba(0,32,28,0.7)]">
            <RetroWindow title="SNAPPY" contentClassName="p-0">
              <div className="relative w-full aspect-[300/400]">
                <img
                  alt="Mascote Snappy GatorLabs"
                  className="absolute inset-0 w-full h-full object-cover border border-[#00201c]"
                  src={imgSnappy}
                />
              </div>
            </RetroWindow>
          </div>
          {/* Primeira foto — frente */}
          <div className="relative z-10 w-[200px] sm:w-[240px] lg:w-[320px] lg:absolute lg:top-0 lg:left-0 shadow-[6px_6px_0px_rgba(0,32,28,0.7)]">
            <RetroWindow title="LEO BECKER" contentClassName="p-0">
              <div className="relative w-full aspect-[300/400]">
                <img
                  alt="Leo Becker"
                  className="absolute inset-0 w-full h-full object-cover border border-[#00201c]"
                  src={imgRectangle34658902}
                />
              </div>
            </RetroWindow>
          </div>
        </div>
      </div>

      {/* About Section 1 */}
      <div className="px-[16px] mt-[40px] lg:-mt-[70px] max-w-[440px] lg:max-w-[1000px] mx-auto">
        <div className="flex items-center gap-[7px] mb-[12px]">
          <div className="bg-[#e75726] size-[10px] lg:size-[14px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[14px] lg:text-[16px] leading-[1.4] text-[#c4b597]">O PROJETO</p>
        </div>

        <h3 className="font-['Big_Shoulders',sans-serif] font-bold text-[32px] sm:text-[38px] lg:text-[64px] leading-[1.2] text-[#c4b597] max-w-[337px] lg:max-w-[900px] mb-[12px]">
          Leo Becker e HostGator juntos para destravar o próximo nível da sua carreira
        </h3>

        <p className="font-['JetBrains_Mono',sans-serif] text-[14px] lg:text-[16px] leading-[1.5] text-[#c4b597] lg:max-w-[800px]">
          Nesta parceria inédita, o designer e engenheiro criativo Leo Becker, com mais de 20 anos de estrada na indústria, se une à HostGator, uma das maiores referências em infraestrutura para web e sistemas. Juntos, oferecem o conhecimento e a base técnica que profissionais criativos precisam para colocar tecnologia no centro dos seus projetos.
        </p>

        <a
          href="https://www.hostgator.com.br/52667-13-3-12.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#e75726] border border-[#00201c] shadow-[4px_4px_0px_#00201c] h-[39px] lg:h-[45px] px-[15px] lg:px-[20px] py-[4px] mt-[24px] hover:shadow-[2px_2px_0px_#00201c] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] lg:text-[14px] leading-[1.4] text-[#00201c]">CONTRATAR VPS</p>
        </a>
      </div>

      {/* Image Section */}

      {/* About Section 2 */}

      {/* Footer */}
      <div className="px-[16px] py-[30px] text-left max-w-[440px] lg:max-w-[1000px] mx-auto">
        <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] leading-[1.4] text-[#c4b597]">
          © 2026 LEO BECKER MEDIA HOUSE
        </p>
      </div>
    </div>
  );
}
