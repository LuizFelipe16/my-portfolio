import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ItemSpace, Loading } from '../../components';
import { Link, Text, TitlePage, View } from '../../_app';

import { Posts } from './styles';

export default function MySpaces() {
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { setTimeout(() => setIsLoading(false), 500) }, []);

  if (!!isLoading) return <Loading />;

  return (
    <Posts>
      <TitlePage t={`Posts ${query?.category}`} />

      <Link href='/blog' text='voltar' style='backPage' />

      <Text type='h1' text='Blog' />
      <Text text='Escolha um dos spaces para acessar o conteúdo' />

      <View type='main' style='spaces'>
        <ItemSpace 
          icon='/icons/code.png'
          title='Programação' 
          description='Conteúdo épico sobre o universo da programação'
          href=''
        />
      </View>
    </Posts>
  );
}
