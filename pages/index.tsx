import { GetStaticProps } from 'next';
import Head from 'next/head';

import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ skillsList }) {
  return (
    <Layout navLinks={skillsList}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className='p-5'>
        <h1>Curadoria de conteúdos Front-end</h1>
        <p></p>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const skillsList = getSortedPostsData();
  return {
    props: {
      skillsList,
    },
  };
};
