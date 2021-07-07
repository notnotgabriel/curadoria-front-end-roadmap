import React, { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../components/Layout';
import Player from '../components/Player';
import Playlist from '../components/Playlist';

import { getAllPostsIds, getPostData, getSortedPostsData } from '../lib/posts';

export default function Post({ skillData, skillsList }) {
  const [[activeBranch, activeLink], setActiveSkillIndexTuple] = useState([
    0, 0,
  ]);

  const activeSkill =
    skillData?.branches[activeBranch]?.links[activeLink] ?? {};

  useEffect(() => {
    if (skillData.id) {
      setActiveSkillIndexTuple([0, 0]);
    }

    return () => setActiveSkillIndexTuple([0, 0]);
  }, [skillData.id]);

  return (
    <Layout navLinks={skillsList} sectionTitle={skillData.title}>
      <div className='grid lg:grid-cols-2 lg:py-8 lg:px-20 gap-4'>
        <Player title={activeSkill.title} contentSrc={activeSkill.url} />

        <Playlist
          branches={skillData.branches}
          activeBranch={activeBranch}
          activeLink={activeLink}
          onSkillClick={setActiveSkillIndexTuple}
        />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const skillsList = getSortedPostsData();
  const skillData = await getPostData(params.id as string);

  return {
    props: {
      skillsList,
      skillData,
    },
  };
};
