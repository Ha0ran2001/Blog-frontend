import * as React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Affix } from 'antd'

import { toBeMarkdown } from '../../utils/beMarkdown';
// import requestUrl from '../../service';
import api from '../../api';

import CardInfo from '../../components/Card-info';

const BlogDetail = () => {
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');
  const params: { id: string } = useParams();

  const history = useHistory();

  // 根据 id 获取文章内容
  const fetchContent = React.useCallback(async () => {
    const blogContent = await api.article.getArticleById(parseInt(params.id));
    setContent(blogContent.data.data['content']);
    setTitle(blogContent.data.data['title']);
  }, []);

  const headerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    fetchContent();

    const header = headerRef.current;
    const height = header?.offsetHeight;

    const scrollChangeHeight = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 10) {
        header?.classList.add('blogDetailActive')
        console.log(22);

      } else {
        header?.classList.remove('blogDetailActive')
      }
    }

    window.addEventListener('scroll', scrollChangeHeight);

    return () => {
      window.removeEventListener('scroll', scrollChangeHeight);
    }
  }, []);

  // 生成 markdown 和 目录
  const tocify = toBeMarkdown(content).tocify;
  const html = toBeMarkdown(content).html;

  return (
    <div className='pb-44 px-[100px] min-h-screen '>
      <div className='h-20 flex justify-between items-center px-10' ref={headerRef}>
        {/* <- back 类型 */}
        <div className='flex flex-col w-16 space-y-4'>
          <div onClick={() => history.goBack()} className='flex text-gray-300 hover:text-gray-700 cursor-pointer justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </div>
          <div className='tracking-[5px]'>类型</div>
        </div>
        {/* 文字大小 时间，author */}
        <div className='flex flex-col space-y-4'>
          <div className='space-x-4'>
            <span className='text-sm'>A</span>
            <span className='text-xl'>A</span>
            <span className='text-2xl'>A</span>
          </div>
          <div>2021/11/26</div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center'>
        {/* 左边栏 */}
        <div className='w-full  bg-white bg-opacity-50 p-2 md:p-10'>
          <div className='text-2xl md:text-3xl lg:text-5xl text-center'>{title}</div>
          {
            content && <div
              dangerouslySetInnerHTML={{ __html: html }}
            >
            </div>
          }
        </div>
        {/* 右边栏 */}
        {/* <div className='w-full md:w-1/6 '> */}
        {/* 个人信息 */}
        {/* <CardInfo />
          <Affix offsetTop={100} className="hidden md:block md:mt-5">
            <div className='bg-white py-4 px-1 bg-opacity-50'>
              <div className=' text-gray-500 text-xl ml-2'>目录</div>
              <div>
                {tocify}
              </div>
            </div>
          </Affix> */}
        {/* </div> */}
      </div>

    </div>
  );
}

export default BlogDetail;