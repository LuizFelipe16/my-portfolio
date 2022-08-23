type Project = {
  id: number;
  title: string;
  banner: string;
  link?: string;
  github?: string;
  description: string;
  access?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MyMoon',
    banner: 'my-moon.png',
    // link: 'https://github.com/LuizFelipe16/my-moon',
    github: 'https://github.com/LuizFelipe16/my-moon',
    description: 'O projeto mais complexo e completo que já desenvolvi, lidei com o máximo de bibliotecas que aprendi durante o programa Ignite da Rocketseat, me importando muito com o código e a organização do projeto. O propósito principal dele é ser uma plataforma para as pessoas entrarem e criarem listas de tarefas noturnas (filmes, séries e atividades similares), particularmente criei isso pois gosto de fazer e criar coisas durante a noite, e gostaria de colocar isso em algum lugar, como um registro, assim como queria explorar muitas e muitas ferramentas modernas em um só projeto, usando diferentes estratégias para um mesmo fim. Internamente implementei o controle de dados com ReactHookForm, cache de dados com ReactQuery, autenticação de login com NextAuth, utilização de métodos GetStaticProps e GetServerSideProps, validação dos formulários com Yup, estilização com Styled Components, design system ChakraUI e RadixUI, banco de dados FaunaDB, integração a um blog com PrismicCMS, testes unitários com Jest e Testing Library, animações de conteúdo com AnimateOnScrollLib e estratégias para melhorar a performance da aplicação.'
  },
  {
    id: 2,
    title: 'Plataforma Sigma',
    banner: 'sigma.png',
    link: 'https://sigma-rho.vercel.app',
    description: 'Projeto de conclusão de curso (TCC), o objetivo foi o desenvolvimento junto a uma empresa, uma solução para a necessidade dela e do mercado atuante, criando uma plataforma para gestão de orçamentos e pedidos (ainda não está no mercado). Junto com 3 amigos, entendemos o que a empresa precisava, listamos os requisitos funcionais e não funcionais do projeto, criamos o layout/design da aplicação e esquematizamos como deveria ser o backend, todos esses processos juntos com a empresa para ela sempre validar. Desenvolvi todo o frontend com TypeScript, NextJS , ReactJS e estilizado com CSS e SASS, seguindo o layout produzido no figma. Desenvolvi todo o backend com TypeScript, NodeJS, features de cadastrar, listar, deletar e atualizar informações, upload de imagens com multer em um servidor AWS SDK, autenticação JWT, validação de usuários por diferentes cargos da aplicação, encriptando informações sensíveis, gerando pdfs e muitos outros recursos. Para a etapa final, o projeto foi finalizado com a conexão entre backend e frontend, junto ao deploy, que pode ser validado e testado pela empresa parceira.'
  },
  {
    id: 3,
    title: 'Master Move.it',
    banner: 'moveit.png',
    link: 'https://master-moveit.vercel.app',
    description: 'O primeiro grande projeto. Inicialmente uma ideia exposta em um dos eventos da Rocketseat (NLW), porém a ideia foi tão boa e me chamou tanta atenção que decidi transformá-la. Seu objetivo é uma plataforma para ajudar pessoas que ficam tempo demais sentadas fazendo uma atividade mental, pois precisamos da atividade física também para manter o foco, portanto a aplicação traz um timer de 25 minutos e uma lista de tarefas que você pode cadastrar, remover ou atualizar, e a cada ciclo do timer, o app traz de forma randômica uma das atividades para você fazer, depois que completar, você ganha o xp que colocou naquela tarefa, subindo cada vez mais de nível. Falando um pouco dos aspectos técnicos criei um backend inteiro sozinho em TypeScript usando NodeJS e Express, banco de dados em SQLite usando o queryBuilder Knex, implementei cadastro e autenticação de usuário na plataforma por login com email e senha usando JWT e Passport, encriptando os dados sensíveis com Bcrypt. Além disso, incrementei o frontend em TypeScript com ReactJS e NextJS, sistema de notificação, autenticação com Cookies e JWT, além de um layout moderno para web.'
  },
  {
    id: 4,
    title: 'Cyber Coffee',
    banner: 'cybercoffee.png',
    link: 'https://cybercoffee.vercel.app',
    github: 'https://github.com/LuizFelipe16/cyber-coffee',
    description: 'Um belo site institucional feito para uma cafeteria online, com foco em simplicidade e modernidade de layout. Falando tecnicamente, o projeto foi desenvolvido em TypeScript com ReactJS e NextJS, estilização com Sass e integração a um blog próprio com Prismic CMS, além da simulação de um carrinho de compras online com funcionalidades de estoque, cálculo automático do total e notificação ao usuário sobre suas ações.'
  },
  {
    id: 5,
    title: 'XForce',
    banner: 'xforce.png',
    link: 'https://xforce.vercel.app',
    github: 'https://github.com/LuizFelipe16/xforce',
    description: 'Site de apresentação para uma academia, com design moderno e totalmente responsivo com dispositivos móveis, apresentando todas as informações que clientes e futuros clientes precisam saber. Falando um pouco por dentro do projeto, ele foi desenvolvido em TypeScript, com ReactJS e NextJS, usando o Design System ChakraUI e um pouco de Sass para algumas estilizações.',
    access: true
  },
  {
    id: 6,
    title: 'MyHeart',
    banner: 'myheart.png',
    link: 'https://myheart-orpin.vercel.app',
    description: 'Uma plataforma web, desenvolvida especialmente como um presente muito importante, porém foi um ótimo projeto, desenvolvido com muita cautela no design, nas animações dentro da plataforma, sendo algo simples mas elegante, para surpreender a pessoa que tem acesso. Falando dos aspectos técnicos, ele foi desenvolvido em TypeScript, usando ReactJS e NextJS, animações com Animate e CSSHake, estilização com Sass e usando o Design System ChakraUI.',
    access: true
  },
  {
    id: 7,
    title: 'CyberNegócios',
    banner: 'cybernegocios.png',
    link: 'https://cybernegocio.com.br',
    description: 'Site de apresentação de empresa e um site institucional, com todo o layout responsivo com outros dispositivos, além de simples e moderno, objetivo e claro na comunicação, além de um domínio próprio totalmente configurado por mim com SSL e DNS, um verdadeiro e completo site para uma empresa se posicionar no ambiente online. Falando do que está por dentro do projeto, ele foi desenvolvido em TypeScript com ReactJS e NextJS, usando os recursos dessas tecnologias para integrar um Blog moderno com Prismic CMS e sessão de comentários.',
    access: true
  },
  {
    id: 8,
    title: 'DashGo.',
    banner: 'dashgo.png',
    link: 'https://dashgo-zeta-two.vercel.app',
    github: 'https://github.com/LuizFelipe16/dashgo',
    description: 'Nada é mais comum no mercado do que plataformas com dashboards para os usuários acessarem, e é exatamente por isso que o DashGo foi construído, uma simulação de como seria uma mini plataforma moderna e bem trabalhada no design e layout, com responsividade com outros dispositivos. Falando um pouco por dentro do projeto, ele foi desenvolvido em TypeScript, com ReactJS e NextJS, usando tecnologias modernas do mercado como por exemplo ReactHookForm, ReactQuery e MirageJS para simular uma API completa, além do layout ser construído com o Design System ChakraUI e algumas estilizações com Sass.',
    access: true
  },
  {
    id: 9,
    title: 'Ignews',
    banner: 'ignews.png',
    link: 'https://challenge-ignews.vercel.app',
    github: 'https://github.com/LuizFelipe16/ignews-full',
    description: 'Realizar pagamentos por meio de um site é bem comum, e é por isso que esse projeto foi construído, um Blog feito com PrismicCMS, em que o usuário pode se cadastrar com o Github e comprar uma assinatura mensal usando o Stripe, dessa forma ele tem acesso aos conteúdos que são postados recorrentemente. Falando um pouco de como é por dentro do projeto, ele foi desenvolvido em TypeScript, com ReactJS e NextJS, usando a api de autenticação NextAuth e o servidor Next para construir uma API que consome Webhooks do Stripe e faz requisições ao banco de dados FaunaDB, resultando em uma aplicação JAMStack, com testes unitários em Jest e estilização moderna de design e layout com Sass.',
    access: true
  },
  {
    id: 10,
    access: true,
    title: 'Landing Page: Poderosas',
    banner: 'power.png',
    link: 'https://landing-page-poderosas.vercel.app',
    github: 'https://github.com/LuizFelipe16/landing-page-power',
    description: `
      Uma das coisas mais comuns de encontrar na web são landing pages de produtos, e 
      esse projeto é exatamente isso, uma reprodução de uma página já existente, mas 
      dessa vez usando o código e as melhores tecnologias do mercado, NextJS para um 
      carregamento limpo e rápido, design system ChakraUI para o layout, efeitos de 
      animação, responsividade com outros dispositivos e mais algumas outras funcionalidades 
      e bibliotecas para criar essa página única.
    `,
  },
  {
    id: 11,
    access: true,
    title: 'CodeLeap Network',
    banner: 'codeleap.png',
    link: 'https://codeleap-chi.vercel.app',
    github: 'https://github.com/LuizFelipe16/codeleap-app',
    description: `
      Uma pequena plataforma web que representa uma rede social, uma rede de network entre
      as pessoas que entrarem e criarem postagens. Esse projeto foi um teste de código 
      feito pela empresa CodeLeap, com sede em Londres no Reino Unido. 
      Foi apresentado um template básico e as funcionalidades necessárias para ser completado,
      dessa forma iniciei e finalizei o desenvolvimento fazendo as alterações e adições que achei
      coerente ao projeto. 
      Falando da parte técnica do projeto, ele foi feito em TypeScript com ReactJS e NextJS, 
      recomendo ver a documentação para entender a quantidade de funcionalidades que 
      esse pequeno projeto foi capaz de explorar, porém um pequeno resumo: 
      cache de dados com react-query, controle dos cookies com nookies, 
      controle de formulários e estados com react-hook-form, design system chakraUi, 
      responsividade com celulares e tablets, validação com yup, testes unitários com jest e 
      testing library, assim como outras libs que impactaram no desenvolvimento.
    `,
  },
];

