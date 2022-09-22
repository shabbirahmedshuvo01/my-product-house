import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import PageTitle from '../Helmet/PageTitle';
import Notice from '../Notice/Notice';

const Home = () => {

    return (
        <div>
            <PageTitle title="Home"></PageTitle>

            <section>
                <Banner />
                <br />
                <Cards />
                <br />
                <Notice />
            </section>

        </div>
    );
};

export default Home;