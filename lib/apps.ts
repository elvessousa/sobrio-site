import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const pagesDirectory = path.resolve(process.cwd(), 'content');

// Get all filenames in posts directory as ['en/filename.md']
export function getAllFileNames(directoryPath: string, filesList = []) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
      filesList = getAllFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      filesList.push(path.join(path.basename(directoryPath), '/', file));
    }
  });

  const filteredList = filesList.filter((file) => file.includes('.md'));
  return filteredList;
}

export function getAllIds() {
  const dir = pagesDirectory;
  const fileNames = getAllFileNames(dir);

  return fileNames.map((fileName) => ({
    params: {
      app: fileName.split('/')[1].replace(/\.md$/, ''),
      lang: fileName.split('/')[0],
    },
  }));
}

export async function getContentData(id: string) {
  const dir = pagesDirectory;
  const fullPath = path.join(dir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const frontMatter = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(prism)
    .process(frontMatter.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...(frontMatter.data as { title: string }),
    contentHtml,
  };
}
