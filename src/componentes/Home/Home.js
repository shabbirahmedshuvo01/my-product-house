import React from 'react';
import Banner from '../Banner/Banner';
import PageTitle from '../Helmet/PageTitle';

const Home = () => {

    return (
        <div>
            <PageTitle title="Home"></PageTitle>

            <section>
                <Banner />
            </section>

        </div>
    );
};

export default Home;