import { RetroWindow } from "./components/RetroWindow";
import { ToolItem } from "./components/ToolItem";
import svgPaths from "../imports/Frame2147224234/svg-26h9m0jbr5";
import imgRectangle34658916 from "../imports/Frame2147224234/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle34658902 from "../imports/Frame2147224234/6765e429a0161c0496d3576ebdc07f64750ebfdc.png";

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
    <div className="bg-[#e75726] border border-[#00201c] shadow-[2px_2px_0px_#00201c] size-[40px] flex items-center justify-center">
      <svg className="block size-[30.9992px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9992 30.9992">
        <path d={svgPaths.p2d999b80} fill="#00201c" />
      </svg>
    </div>
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
    <div className="bg-[#005c54] min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pt-[13px] pb-[32px] bg-gradient-to-b from-[#00201c] from-[3.276%] via-[#005c54] via-[74.181%] to-[#f05524] flex flex-col items-center overflow-hidden">
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
        <div className="absolute top-[12px] left-[15px] z-50">
          <MenuButton />
        </div>

        {/* Logo and content container */}
        <div className="pt-[90px] flex flex-col items-center gap-[16px] px-4 z-10 w-full">
          <div className="scale-[0.9] sm:scale-100 lg:scale-125">
            <GatorLabsLogo />
          </div>
          <p className="font-['Geist_Mono',sans-serif] text-[16px] sm:text-[18px] lg:text-[24px] leading-[1.4] text-[#c4b597] text-center max-w-[420px] lg:max-w-[700px] px-4 lg:mt-[24px]">
            O laboratório de conteúdo para ajudar a melhorar a sua experiência com a tecnologia criativa no seu dia a dia.
          </p>
          <button className="bg-[#e75726] border border-[#00201c] shadow-[4px_4px_0px_#00201c] h-[39px] lg:h-[45px] px-[15px] lg:px-[20px] py-[4px] hover:shadow-[2px_2px_0px_#00201c] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] lg:text-[14px] leading-[1.4] text-[#00201c]">CONTRATAR VPS</p>
          </button>
        </div>

        {/* Video Player Window */}
        <div className="mt-[32px] w-[calc(100%-32px)] max-w-[391px] lg:max-w-[800px] z-10">
          <RetroWindow title="TOOL" contentClassName="p-0">
            <div className="relative w-full aspect-[392/217]">
              <iframe
                className="absolute inset-0 w-full h-full border border-[#00201c]"
                src="https://www.youtube.com/embed/8CbjjKCnbwk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </RetroWindow>
        </div>
      </div>

      {/* Section title and description */}
      <div className="px-[16px] pt-[40px] pb-[32px] max-w-[440px] lg:max-w-[1000px] mx-auto">
        <div className="flex items-center gap-[7px] mb-[12px]">
          <div className="bg-[#e75726] size-[10px] lg:size-[14px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[14px] lg:text-[16px] leading-[1.4] text-[#c4b597]">FERRAMENTAS</p>
        </div>
        <h2 className="font-['Instrument_Serif',sans-serif] text-[28px] sm:text-[32px] lg:text-[64px] leading-[1.0] text-[#c4b597] max-w-[337px] lg:max-w-[900px]">
          As 10 principais ferramentas para engenharia criativa
        </h2>
        <p className="font-['Geist_Mono',sans-serif] text-[14px] lg:text-[16px] leading-[1.5] text-[#c4b597] max-w-[332px] lg:max-w-[600px] mt-[18px]">
          O laboratório de conteúdo para ajudar a melhorar a sua experiência com a tecnologia criativa no seu dia a dia.
        </p>
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
                  <ToolItem name={tool.name} description={tool.description} />
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
          <div className="absolute top-[64px] right-[16px] w-[240px] lg:w-[320px] lg:top-[48px] lg:right-0 z-0 shadow-[6px_6px_0px_rgba(0,32,28,0.7)]">
            <RetroWindow title="FOTO" contentClassName="p-0">
              <div className="relative w-full aspect-[300/400]">
                <img
                  alt="Leo Becker 2"
                  className="absolute inset-0 w-full h-full object-cover border border-[#00201c]"
                  src={imgRectangle34658902}
                />
              </div>
            </RetroWindow>
          </div>
          {/* Primeira foto — frente */}
          <div className="relative z-10 w-[240px] lg:w-[320px] lg:absolute lg:top-0 lg:left-0 shadow-[6px_6px_0px_rgba(0,32,28,0.7)]">
            <RetroWindow title="FOTO" contentClassName="p-0">
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
      <div className="px-[16px] mt-[80px] lg:-mt-[70px] max-w-[440px] lg:max-w-[1000px] mx-auto">
        <div className="flex items-center gap-[7px] mb-[12px]">
          <div className="bg-[#e75726] size-[10px] lg:size-[14px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[14px] lg:text-[16px] leading-[1.4] text-[#c4b597]">QUEM SOMOS</p>
        </div>

        <h3 className="font-['Instrument_Serif',sans-serif] text-[32px] sm:text-[38px] lg:text-[64px] leading-[1.0] text-[#c4b597] max-w-[337px] lg:max-w-[900px] mb-[12px]">
          Leo Becker, há 20 anos no mercado criativo
        </h3>

        <p className="font-['JetBrains_Mono',sans-serif] text-[14px] lg:text-[16px] leading-[1.5] text-[#c4b597] lg:max-w-[800px] mb-[12px]">
          Designer e professor, atua no mercado criativo há mais de 20 anos. Já liderou dezenas de projetos em múltiplas plataformas, sempre aliando tecnologia e criatividade com um craft impecável. Como consultor criativo independente, colabora com negócios de todos os portes na construção de narrativas visuais que impulsionam a audiência, fortalecem marcas e geram resultados extraordinários. Apaixonado por inovação, pesquisa e integra tecnologias emergentes e inteligência artificial a seus processos, elevando cada projeto de design a um patamar de vanguarda.
        </p>

        <button className="bg-[#e75726] border border-[#00201c] shadow-[4px_4px_0px_#00201c] h-[39px] lg:h-[45px] px-[15px] lg:px-[20px] py-[4px] hover:shadow-[2px_2px_0px_#00201c] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] lg:text-[14px] leading-[1.4] text-[#00201c]">CONTRATAR VPS</p>
        </button>
      </div>

      {/* Image Section */}

      {/* About Section 2 */}

      {/* Footer */}
      <div className="py-[30px] text-center max-w-[440px] lg:max-w-[1000px] mx-auto">
        <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] leading-[1.4] text-[#c4b597]">
          © 2026 LEO BECKER MEDIA HOUSE
        </p>
      </div>
    </div>
  );
}
