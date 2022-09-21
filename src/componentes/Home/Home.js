import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Helmet/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <h1 className='text-2xl'>how are you</h1>
        </div>
    );
};

export default Home;