import React, { useState } from 'react';
import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../components/Layout';
import { getAllPostsIds, getPostData, getSortedPostsData } from '../lib/posts';
import SkillTree from '../components/SkillTree/SkillTree';
import SkillContent from '../components/SkillContent/SkillContent';

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 'skill-tree skill-content';
  grid-template-columns: auto 35%;
  grid-gap: 10px;
  padding: 10px 5px 50px;
`;

export default function Post({ skillData, skillsList }) {
  const [[activeBranch, activeLink], setActiveSkillIndexTuple] = useState([
    null,
    null,
  ]);
  const activeSkill = skillData?.branches[activeBranch]?.links[activeLink];

  return (
    <Layout navLinks={skillsList} sectionTitle={skillData.title}>
      <GridContainer>
        <SkillTree
          branches={skillData.branches}
          activeBranch={activeBranch}
          activeLink={activeLink}
          onSkillClick={setActiveSkillIndexTuple}
        />

        {activeSkill && (
          <SkillContent title={activeSkill.title} url={activeSkill.url} />
        )}
      </GridContainer>
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
