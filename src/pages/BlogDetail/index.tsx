import * as React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Affix } from 'antd'

import { toBeMarkdown } from '../../utils/beMarkdown';
// import requestUrl from '../../service';
import api from '../../api';

import CardInfo from '../../components/Card-info';

const BlogDetail = () => {
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');
  const params: { id: string } = useParams();

  // 根据 id 获取文章内容
  const fetchContent = React.useCallback(async () => {
    const blogContent = await api.article.getArticleById(parseInt(params.id));
    setContent(blogContent.data.data['content']);
    setTitle(blogContent.data.data['title']);
  }, []);

  React.useEffect(() => {
    fetchContent();
  }, []);

  // 生成 markdown 和 目录
  const tocify = toBeMarkdown(content).tocify;
  const html = toBeMarkdown(content).html;

  return (
    <div className='pb-44 pt-5 px-[100px] min-h-screen '>
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