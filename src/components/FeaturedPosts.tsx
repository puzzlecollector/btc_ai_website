import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='my-8'>
      <h2 className='text-2xl font-bold my-4 mx-4'>Featured Posts</h2>
      <div className='mx-4'>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
