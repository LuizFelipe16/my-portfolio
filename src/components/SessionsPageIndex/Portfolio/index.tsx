import { useBreakpointValue } from "@chakra-ui/react";
import { ItemPortfolioFolder } from "../../../components/ItemPortfolioFolder";

import { Portfolio } from "./styles";

export function SessionPortfolio() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Portfolio id="portfolio">
      <div className="header-title">
        <h1>
          Meu Portfólio
        </h1>
        <h2>
          minha experiência de anos fazendo o que mais gosto
        </h2>
      </div>
      <div className="portfolios">
        <ItemPortfolioFolder
          animation="fade-right"
          title="Mais de 35 Projetos desenvolvidos"
          text="Sites, Lading Pages, Plataformas, Sites Institucionais e mais"
          href="/portfolio/dev"
        />
        <ItemPortfolioFolder
          animation={!!isMobileVersion ? "fade-right" : "fade-left"}
          title="Mais de 70 Artes publicadas"
          text="Brandings, Carrosseis, Posts Únicos, Artes de Anúncios para Redes Sociais e mais"
          href="/portfolio/design"
        />
      </div>
    </Portfolio>
  );
}