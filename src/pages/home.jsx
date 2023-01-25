import React from 'react';
import HomeBanner from './home/main_banner';
import Profile from './home/profile';
import Skill from './home/skill';
import Project from './home/project';

function Home() {
  return (
    <div id="wrap">
      <HomeBanner />
      <Profile />
      <Skill />
      <Project />
    </div>
  );
}

export default Home;
