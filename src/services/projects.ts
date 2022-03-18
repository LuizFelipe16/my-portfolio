type Project = {
  id: number;
  title: string;
  banner: string;
  link: string;
  description: string;
  access?: boolean;
}

let project = {
  id: 0,
  title: '',
  banner: '',
  link: '',
  description: ''
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MyMoon',
    banner: 'my-moon.png',
    link: 'https://github.com/LuizFelipe16/my-moon',
    description: 'O projeto mais complexo e completo que já desenvolvi, lidei com o máximo de bibliotecas que aprendi durante o programa Ignite da Rocketseat, me importando muito com o código e a organização do projeto. O propósito principal dele é ser uma plataforma para as pessoas entrarem e criarem listas de tarefas noturnas (filmes, séries e atividades similares), particularmente criei isso pois gosto de fazer e criar coisas durante a noite, e gostaria de colocar isso em algum lugar, como um registro, assim como queria explorar muitas e muitas ferramentas modernas em um só projeto, usando diferentes estratégias para um mesmo fim. Internamente implementei o controle de dados com ReactHookForm, cache de dados com ReactQuery, autenticação de login com NextAuth, utilização de métodos GetStaticProps e GetServerSideProps, validação dos formulários com Yup, estilização com Styled Components, design system ChakraUI e RadixUI, banco de dados FaunaDB, integração a um blog com PrismicCMS, testes unitários com Jest e Testing Library, animações de conteúdo com AnimateOnScrollLib e estratégias para melhorar a performance da aplicação.'
  },
  {
    id: 2,
    title: 'Plataforma Sigma',
    banner: 'sigma.png',
    link: 'https://sigma-rho.vercel.app',
    description: 'Projeto de conclusão de curso (TCC), o objetivo foi o desenvolvimento junto a uma empresa, uma solução para a necessidade dela e do mercado atuante, criando uma plataforma para gestão de orçamentos e pedidos (ainda não está no mercado). Junto com 3 amigos, entendemos o que a empresa precisava, listamos os requisitos funcionais e não funcionais do projeto, criamos o layout/design da aplicação e esquematizamos como deveria ser o backend, todos esses processos juntos com a empresa para ela sempre validar. Desenvolvi todo o frontend com TypeScript, NextJS , ReactJS e estilização com CSS e SASS, seguindo o layout produzido no figma. Desenvolvi todo o backend com TypeScript, NodeJS, features de cadastrar, listar, deletar e atualizar informações, upload de imagens com multer em um servidor AWS SDK, autenticação JWT, validação de usuários por diferentes cargos da aplicação, encriptando informações sensíveis, gerando pdfs e muitos outros recursos. Para a etapa final, o projeto foi finalizado com a conexão entre backend e frontend, junto ao deploy, pode ser validado e testado pela empresa parceira.'
  },
  {
    id: 3,
    title: 'Master Move.it',
    banner: 'moveit.png',
    link: 'https://master-moveit.vercel.app',
    description: 'O primeiro grande projeto. Inicialmente uma ideia exposta em um dos eventos da Rocketseat (NLW), porém a ideia foi tão boa e me chamou tanta atenção que decidi transformar ela. Seu objetivo é uma plataforma para ajudar pessoas que ficam tempo demais sentadas fazendo uma atividade mental, pois precisamos da atividade física também para manter o foco, portanto a aplicação traz um timer de 25 minutos e uma lista de tarefas que você pode cadastrar, remover ou atulizar, e a cada ciclo do timer, o app traz de forma randomica uma das atividades para você fazer, depois que completar, você ganha o xp que colocou naquela tarefa, subindo cada vez mais de nível. Falando um pouco dos aspectos técnicos criei um backend inteiro sozinho em TypeScript usando NodeJS e Express, banco de dados em SQLite usando o queryBuilder Knex, implementei cadastro e autenticação de usuário na plataforma por login com email e senha usando JWT e Passport, encriptando os dados sensíveis com Bcrypt. Além disse incrementei o frontend em TypeScript com ReactJS e NextJS, sistema de notifcação, autenticação com Cookies e JWT, além de um layout moderno para web.'
  },
  {
    id: 4,
    title: 'Cyber Coffee',
    banner: 'cybercoffee.png',
    link: 'https://cybercoffee.vercel.app',
    description: 'Um belo site institucional feito para uma cafeteria online, com foco em simplicidade e modernidade de layout. Falando tecnicamente, o projeto foi desenvolvido em TypeScript com ReactJS e NextJS, estilização com Sass e integração a um blog próprio com Prismic CMS, além da simulação de um carrinho de compras online com funcionadalidades de estoque, cálculo autómatico do total e notificação ao usuário sobre suas ações.'
  },
  {
    id: 5,
    title: 'XForce',
    banner: 'xforce.png',
    link: 'https://xforce.vercel.app',
    description: 'Site de apresentação para uma academia, com design moderno e totalmente responsivo com dispositibos móveis, apresentando todas as informações que clientes e futuros clientes precisam saber. Falando um pouco por dentro do projeto, ele foi desenvolvido em TypeScript, com ReactJS e NextJS, usando o Design System ChakraUI e um pouco de Sass para algumas estilizações.',
    access: true
  },
  {
    id: 6,
    title: 'MyHeart',
    banner: 'myheart.png',
    link: 'https://myheart-orpin.vercel.app',
    description: 'Uma plataforma web, desenvolvida especialmente como um presente muito importante, porém foi um ótimo projeto, desenvolvido com muita cautela no design, nas animações dentro da plataforma, sendo algo simples mas elegante, para surpreendar a pessoa que tem acesso. Falando dos aspectos técnicos, ele foi desenvolvido em TypeScript, usando ReactJS e NextJS, animações com Animate e CSSHake, estilização com Sass e usando o Design System ChakraUI',
    access: true
  }
];