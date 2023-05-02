import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className='flex flex-col p-0 sm:p-4  w-full'>
      <h1 className='text-4xl font-bold py-4 px-4 sm:px-8'>{title}</h1>
      <p className='text-xl font-bold px-4 sm:px-8'>{description}</p>
      <div className='w-6/12 border-2 border-sky-600 mt-4 mb-8' />
      <div className='flex items-center self-start text-sky-600 mx-4'>
        <AiTwotoneCalendar />
        <p className='font-semibold ml-2'>{date.toString()}</p>
      </div>
      <MarkdownViewer content={content} />
    </section>
  );
}
