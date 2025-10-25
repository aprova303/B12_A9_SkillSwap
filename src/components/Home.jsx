import React from 'react';
import Skills from '../pages/Skills';
import HeroSlider from './HeroSlider';
import PopularCategories from './PopularCategories';

const Home = () => {
    return (
        <div>

          <HeroSlider></HeroSlider>
          <Skills></Skills>
          <PopularCategories></PopularCategories>
        </div>
    );
};

export default Home;