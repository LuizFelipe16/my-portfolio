import { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { ItemSpace, Loading } from '../../components';
import { Link, Text, TitlePage, View } from '../../_app';

import { Spaces } from './styles';

export default function PageBlog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { setTimeout(() => setIsLoading(false), 100) }, []);

  if (!!isLoading) return <Loading />;

  return (
    <Spaces>
      <TitlePage t='Blog' />

      <Link href='/' style='backPage'>
        <FaLongArrowAltLeft />
      </Link>

      <Text type='h1' text='Blog' />
      <Text text='Escolha um dos spaces para acessar o conteúdo' />

      <View type='main' style='spaces'>
        <ItemSpace 
          icon='/icons/code.png'
          title='Programação' 
          description='Conteúdo épico sobre o universo da programação'
          href='/posts/programacao'
          onClick={() => setIsLoading(true)}
        />
        <ItemSpace 
          icon='/icons/design.png'
          title='Design' 
          description='Conteúdo épico sobre o universo do design'
          href='/posts/design'
          onClick={() => setIsLoading(true)}
        />
      </View>
    </Spaces>
  );
}
