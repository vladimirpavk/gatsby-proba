import React from 'react';

import Layout from '../components/layout';

import classes from './about.module.css';

const AboutPage = ()=>(
    <Layout>            
    <main className={classes.About}>
        <h1>About Page</h1>    
    </main>
    </Layout>
);

export default AboutPage;