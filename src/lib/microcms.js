const SERVICE_DOMAIN = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

// 記事一覧取得
export async function getPosts() {
  const res = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/posts`,
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
    }
  );

  console.log(res.status);

  const data = await res.json();
  console.log(data);

  return data;
}

// slug一覧取得
export async function getSlugs() {
  const data = await getPosts();

  return data.contents.map((post) => ({
    slug: post.slug,
  }));
}

// 記事詳細取得
export async function getPostBySlug(slug) {
  const res = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/posts?filters=slug[equals]${slug}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
    }
  );

  const data = await res.json();
  return data.contents[0];
}