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
