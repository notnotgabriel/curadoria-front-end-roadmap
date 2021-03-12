import { useState } from 'react';
import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';
import { getAllPostsIds, getPostData, getSortedPostsData } from '../lib/posts';

const SkillTree = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const SkillBranch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
`;

const SkillTitle = styled.p`
  text-transform: uppercase;
  color: #faf6f7;
  text-align: center;
  height: 50px;
`;

const Hex = styled.div`
  position: relative;
  width: 135px;
  height: 77.94px;
  background-color: #33322d;
  margin: 38.97px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 67.5px solid transparent;
    border-right: 67.5px solid transparent;
  }

  &::before {
    bottom: 100%;
    border-bottom: 38.97px solid #33322d;
  }

  &::after {
    top: 100%;
    width: 0;
    border-top: 38.97px solid #33322d;
    left: 0;
  }
`;

const HexContainer = styled.button`
  position: relative;
  margin-bottom: 20px;

  text-align: left;
  padding: 0;
  border: 0;
  background: none;

  &:last-child {
    margin-bottom: 0;
    &::after {
      display: none;
    }
  }

  &::after {
    content: '';
    background: #faf6f7;
    opacity: 0.7;
    height: 30px;
    width: 10px;
    display: block;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 'skill-tree skill-content';
  grid-template-columns: auto 35%;
  grid-gap: 10px;
`;

const Player = ({ contentSrc }) => {
  return (
    <iframe
      width='560'
      height='315'
      src={contentSrc}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

const SkillContent = ({ title, url }) => {
  const isYoutube = url.includes('youtube.com');

  return (
    <>
      <SkillTitle>{title}</SkillTitle>
      {isYoutube && <Player contentSrc={url} />}
      {!isYoutube && (
        <a href={url} target='_blank'>
          Leitura
        </a>
      )}
    </>
  );
};

export default function Post({ skillData, skillsList }) {
  const [[activeBranch, activeLink], setActiveSkillIndexTuple] = useState([
    0,
    0,
  ]);
  const activeSkill = skillData?.branches[activeBranch]?.links[activeLink];

  return (
    <Layout navLinks={skillsList}>
      <Head>
        <title>{skillData.title}</title>
      </Head>
      <GridContainer>
        <SkillTree>
          {skillData.branches.map((branch, branchIndex) => {
            return (
              <SkillBranch key={branchIndex}>
                <SkillTitle>{branch.title}</SkillTitle>
                {branch.links.map((link, linkIndex) => {
                  return (
                    <HexContainer
                      key={linkIndex}
                      onClick={() =>
                        setActiveSkillIndexTuple([branchIndex, linkIndex])
                      }
                    >
                      <Hex>{link.title}</Hex>
                    </HexContainer>
                  );
                })}
              </SkillBranch>
            );
          })}
        </SkillTree>

        {activeSkill && (
          <section>
            <SkillContent title={activeSkill.title} url={activeSkill.url} />
          </section>
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
