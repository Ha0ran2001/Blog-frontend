import * as React from 'react';

import CardInfo from '../../components/Card-info';
import List from '../../components/List';
import Footer from '../../components/footer/Footer'
import './home.css'
import api from '../../api';

export interface HomeProps {

}

interface Article {
  id?: number,
  title?: string,
  introduce?: string,
  createTime?: number | null,
  visitCount?: number | null,
  typeName?: string,
}

const Home: React.FC<HomeProps> = () => {

  const [data, setData] = React.useState<Article[]>();

  React.useEffect(() => {
    // 获取文章列表
    const fetchData = async () => {
      const results = await api.article.getArticles();
      setData(results.data.data);
      console.log(results);
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='h-20 leading-[5rem] relative'>
        <div className='font-semibold text-center'>文章列表</div>
        <div className="cursor-pointer flex justify-around items-center w-14 h-8 absolute right-8 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-around overflow-y-auto scroll-hidden'>
        {
          data && data.map((item, index) => (
            <List
              id={item.id}
              title={item.title}
              introduce={item.introduce}
              createTime={item.createTime}
              visitCount={item.visitCount}
              typeName={item.typeName}
              key={index}
            />
          ))
        }
      </div>
      <Footer />
    </>
  );
}

export default Home;
