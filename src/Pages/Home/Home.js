import React from 'react';
import HomeService from '../../HomeServiec/HomeService';
import Banner from '../banner/Banner';
import Mypage from '../banner/Mypage/Mypage';
import useTitle from '../usetitle/Usetitle';


const Home = () => {
  useTitle("Home")
    return (
        <div>
          <Banner></Banner>
          <HomeService></HomeService>
          <Mypage></Mypage>
        </div>
    );
};

export default Home;