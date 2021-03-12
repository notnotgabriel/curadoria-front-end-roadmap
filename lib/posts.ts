import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parsedFileContents = JSON.parse(fileContents);

    return {
      id,
      title: parsedFileContents.title,
      order: parsedFileContents.order,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }

    return -1;
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const parsedFileContents = JSON.parse(fileContents);

  return {
    id,
    ...parsedFileContents,
  };
}
