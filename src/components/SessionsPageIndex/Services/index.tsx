import { FaPenNib, FaFileCode } from "react-icons/fa";

import { ItemService } from "../../../components/ItemService";

import { Services } from "../../../styles/sessions/services";

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
          title="Projetos Web"
          text={`
            Desenvolvimento de sites web profissionais, 
            blogs, portfólios, landing pages, paginas 
            institucionais e/ou de apresentação com responsividade em dispositivos mobile.
            `}
        />
        <ItemService
          icon={FaPenNib}
          title="Designs & Criativos"
          text={`
            Crio designs de alta qualidade com neurodesign e neurocopy, intuitivos que 
            prendem a atenção, para as mídias sociais, assim como criativos para anúncios online.
            `}
        />
      </div>
    </Services>
  );
}