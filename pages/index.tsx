import { GetStaticProps } from "next";
import Head from "next/head";

import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ skillsList }) {
  return (
    <Layout navLinks={skillsList}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-10 px-8">
        <h1 className="text-4xl lg:text-7xl text-gray-900 mb-10">
          Aprenda Front-end
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-8 sm:mb-11 text-gray-700">
          Saiba como se tornar a próxima pessoa desenvolvedora front-end,
          estudando sobre a Internet, HTML, CSS, Javascript e Git, e tudo o que
          envolve o vasto mundo do desenvolvimento web.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded py-8 px-4 shadow-sm max-w-sm flex flex-col justify-between">
            <p className="text-gray-800 text-center text-lg">
              Este é um repositório para te ajudar a estudar, gratuitamente,
              sobre Internet, HTML, CSS, Javascript e Git para se tornar uma
              pessoa desenvolvedora front-end.
            </p>
            <img className="m-auto" src="/images/html.png" />
          </div>
          <div className="bg-white rounded py-8 px-4 shadow-sm max-w-sm flex flex-col justify-between">
            <p className="text-gray-800 text-center text-lg">
              Baseado no famoso{" "}
              <a
                href="https://roadmap.sh/frontend"
                target="_blank"
                className="font-semibold underline"
              >
                roadmap.sh
              </a>
              , separamos os melhores conteúdos presentes na internet, para você
              começar a dar seus primeiros passos no mundo da programação.
            </p>
            <img className="m-auto" src="/images/module.png" />
          </div>
        </div>
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
