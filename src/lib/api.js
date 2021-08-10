import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src", "content", "projects");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory, { withFileTypes : true });
}

export function getPostBySlug(slug, fields = []) {

	// console.log(slug);
	const realSlug = slug.replace(/\.md$/, "");
	if (realSlug != "sample") return;

	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// console.log("fileContents:: ", fileContents);
	const { data, content } = matter(fileContents);

	// console.log("content:: ", content);

	const limit = false;
	const items = {};

	if ( limit ) {
		// Ensure only the minimal needed data is exposed
		fields.forEach((field) => {
			if (field === "slug") {
				items[field] = realSlug;
			}
			if (field === "content") {
				items[field] = content;
			}
			if (data[field]) {
				items[field] = data[field];
			}
		});

	} else {
		Object.keys(data).forEach(
			(field) => {
				
				items[field] = data[field];
			}
		);
		items["slug"] = realSlug;
		items["content"] = content;
	}

	// console.log("items:: ", items);
	return items;
}

export function getAllPosts(fields = []) {
	const slugs = getPostSlugs();

	const cleanSlugs = slugs.filter(
		(slug) => slug.isFile() && slug.name.includes(".md")
	);
	const posts = cleanSlugs
		.map((slug) => {
			return getPostBySlug(slug.name, fields);
		})
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
	return posts;
}
