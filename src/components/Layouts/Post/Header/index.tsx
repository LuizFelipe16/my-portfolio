import { Text, View } from "../../../../_app";

import { ViewHeader } from './styles';

interface HeaderPostProps {
  banner: string;
  headline: string;
  description: string;
};

export const HeaderPost = ({ banner, headline, description }: HeaderPostProps) => (
  <ViewHeader>
    <img className='banner' src={banner} alt={headline} />
    
    <View style='content'>
      <Text type='h1' text={headline} />
      <Text text={description} />
    </View>
  </ViewHeader>
);
