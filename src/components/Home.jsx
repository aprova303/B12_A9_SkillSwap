import React from 'react';
import Skills from '../pages/Skills';
import HeroSlider from './HeroSlider';
import PopularCategories from './PopularCategories';
import HowItWorks from '../pages/HowItWorks';
import TopRatedProviders from '../pages/TopRatedProvider';

const Home = () => {
    return (
        <div>

          <HeroSlider></HeroSlider>
          <TopRatedProviders></TopRatedProviders>
          <Skills></Skills>
          <PopularCategories></PopularCategories>
          <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;