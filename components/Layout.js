import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default props => {
  return (
    // <div>
    // <Header />
    // <Container>
    //   <Head>
    //     <link
    //       rel="stylesheet"
    //       href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    //     />
    //   </Head>
    //   {props.children}
    // </Container>
    // </div>
    <div style={{background: `linear-gradient(45deg, #4ca1af ,#c4e0e5)`}}>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
            </Head>
            <Header/>
            <Container >
                {props.children}
            </Container>
            <Footer/>
      </div>
  );
};
