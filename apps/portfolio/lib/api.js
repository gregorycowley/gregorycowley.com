import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'content', 'projects');
const milestonesDirectory = join(process.cwd(), 'content', 'milestones');


export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}





// --------------------------

export function getMilestoneSlugs() {
  return fs.readdirSync(milestonesDirectory);
}

export function getMilestoneBySlug(slug, fields = []) {

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(milestonesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items
}

export function getAllMilestones(fields = []) {
  const slugs = getMilestoneSlugs();

  const milestones = slugs
    .map((slug) => getMilestoneBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((milestone1, milestone2) => (milestone1.date > milestone2.date ? '-1' : '1'));
  return milestones;
}
