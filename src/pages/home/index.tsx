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
    <div>
      <header className='h-20 text-center leading-[5rem]'>文章列表</header>
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
    </div>
  );
}

export default Home;
