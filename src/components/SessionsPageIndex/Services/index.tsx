import { FaPenNib, FaFileCode, FaMagic } from "react-icons/fa";

import { ItemService } from "../../../components/ItemService";

import { Services } from "./styles";

export function SessionServices() {
  return (
    <Services id="services">
      <div>
        <h1>
          O que eu Faço
        </h1>
        <h2>
          serviços e soluções
        </h2>
      </div>
      <div className="services">
        <ItemService
          icon={FaFileCode}
          title="Desenvolvimento"
          text={`
            Desenvolvimento de sites web profissionais, 
            blogs, portfólios, landing pages, paginas 
            institucionais e/ou de apresentação com responsividade em dispositivos mobile.
          `}
        />
        <ItemService
          icon={FaPenNib}
          title="Designs"
          text={`
            Crio designs de alta qualidade com neurodesign e neurocopy, intuitivos que 
            prendem a atenção, para as mídias sociais, assim como criativos para anúncios online.
          `}
        />
        <ItemService
          icon={FaMagic}
          title="Interfaces"
          text={`
            Desenho e planejo interfaces fluentes para o usuário saber claramente o que precisa fazer,
            sendo objetiva e moderna, focando em interações que prendem a atenção.
          `}
        />
      </div>
    </Services>
  );
}