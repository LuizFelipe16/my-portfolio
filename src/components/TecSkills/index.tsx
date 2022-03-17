import { Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { TecSkillsStyles } from './styles';

export function TecSkills() {
  return (
    <TecSkillsStyles>
      <Swiper
        className="swiper-skills"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={7}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/typescript.svg" alt="TypeScript" /></div>
            <Text fontSize="sm" color="gray.900">TypeScript</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/javascript.png" alt="JavaScript" /></div>
            <Text fontSize="sm" color="gray.900">JavaScript</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/react.png" alt="React" /></div>
            <Text fontSize="sm" color="gray.900">ReactJS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/next.png" alt="Next" /></div>
            <Text fontSize="sm" color="gray.900">NextJS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/nodejs.png" alt="NodeJS" /></div>
            <Text fontSize="sm" color="gray.900">NodeJS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/chakra.png" alt="ChakraUI" /></div>
            <Text fontSize="sm" color="gray.900">ChakraUI</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/sass.png" alt="Sass" /></div>
            <Text fontSize="sm" color="gray.900">Sass</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><img src="/skills/sass.png" alt="Sass" /></div>
            <Text fontSize="sm" color="gray.900">Sass</Text>
          </div>
        </SwiperSlide>
      </Swiper>
    </TecSkillsStyles>
  );
}