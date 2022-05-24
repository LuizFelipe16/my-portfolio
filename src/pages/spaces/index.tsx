import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ItemSpace } from '../../components/Layouts';
import { Loading } from '../../components/Loading';
import { Link, Text, View } from '../../_app';

import { Spaces } from './styles';

export default function MySpaces() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { setTimeout(() => setIsLoading(false), 1000) }, []);

  if (!!isLoading) return <Loading />;

  return (
    <Spaces>
      <Head><title>Luiz Felipe | My Spaces</title></Head>

      <Link href='/' text='voltar' style='backPage' />

      <Text type='h1' text='Blog' />
      <Text text='Escolha um dos spaces para acessar o conteúdo' />

      <View type='main' style='posts'>
        <ItemSpace 
          icon='/icons/code.png'
          title='Programação' 
          description='Conteúdo épico sobre o universo da programação'
          href=''
        />
        <ItemSpace 
          icon='/icons/design.png'
          title='Design' 
          description='Conteúdo épico sobre o universo do design'
          href=''
        />
      </View>
    </Spaces>
  );
}
