import * as React from 'react';
import { Pagination } from 'antd';

import CardInfo from '../../components/Card-info';
import List from '../../components/List';

import './home.css'
import api from '../../api';


export interface HomeProps {

}

type Article = {
  id: number,
  title: string,
  introduce: string,
  createTime: number | null,
  visitCount: number | null,
  typeName: string,
}

const Home: React.FC<HomeProps> = () => {
  const [data, setData] = React.useState<Article[] | null>(null);

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
    // <div id="home">

    <div className='pb-44 pt-5 min-h-screen'>
      <div className='flex flex-col md:flex-row md:justify-around lg:justify-center'>
        {/* 左边栏 内容栏 */}
        <div className='md:w-3/5 lg:mr-3 w-full'>
          {
            data && data.map((item, index) => (
              <div>
                <List
                  id={item.id}
                  title={item.title}
                  introduce={item.introduce}
                  createTime={item.createTime}
                  visitCount={item.visitCount}
                  typeName={item.typeName}
                  key={index}
                />
              </div>
            ))
          }
        </div>
        {/* 右边栏 */}
        <div className='w-full md:w-1/3 lg:w-1/6'>
          {/* 个人信息  */}
          <CardInfo />

        </div>
      </div>
    </div>
  );
}

export default Home;

//                                      ;;.
//                                     ,t;i,                 ,;;;:
//                                     :t::i,              ,;i;:,:,
//                                     11;:;i;.          .;i;:::,,:
//                                    ,1;i11i11iii;;;;::;;:,:,..,,:.
//                                  .:1ttt11i;iii1111ii;:.,:,. .,::.
//                              ,i1tfftfffti;;ii;iiiiiii;:,,.  ,:;,
//                             ;Lfffttttft1;;;i111i;;iii11i:..,:,;;
//                            .fLLLt:,,;t1i;;1tttt1ii;iii1111i;:,:1;
//                            1C00Ci. .i1t111ii;;:,:;;iii11111i;,,it.
//                           ,C00Ct1i1tttftti:. :.  ,ii11111111i;:;1,
//                           t0GGGfffftffftt1i;::,:i1tfffttttt11iii1;
//                          ,CCGC;,...,;fLftt1tt11111tfLLftffftt11i11.
//                          iGLGt       tLfftttfffLffffffLfffttt1ii11i
//                          iGLf;.    .:i1tt11ffffffLfffftt1111ii;iiit;
//                          1GLt:..  ..:iii1111ttttt1ttt1111111i;;i;i1t
//                          ;GLLt,     .,::::,:i11111t11ttfttt1i;;;;iit:
//                          .LCLft;.........,:i1111ttttttttt11i;;;;;;i1i
//                           ,LLfff1iiiiiiii111111111tttt11iii;;;;::;;it;
//                            tfffftttt1111iiiiii1ttttt111iii;;;:::;;;iti
//                           :Ltttttt1111iiiiiii1tttt111111iii;:::;iii1t1
//                           ;Lftt11111111iiiiiiii;iii11111ii;;;ii111t1f1
//                           tLffftt1ii;ii;;;;;;;;ii11111111ii1tttttttttf
//                           fCLfftt11ii;;;;;;ii11t11111tttttffffffftttt1
//                          ,LCLLfft111iiiiiii11t111ttt11tttffttfffftt11:
//                       .:1fLLLffttt11iiiiii111111111ttft1tffffffftt1ii;
//                     ,1fLLCLLffttt111iiiii11111111t1tttfftfffffftt1i;;i
//                  .:tffLCCCCLfftt1111i1i1111111t1t1111ttffffttt11ii;;;i
//                 ,fLffLGGCGCLfftt111ii11111t1tttttttt11tfffftt111i;;;;1
//                :fftfCGGLCCLLftt111ii1ii1111111tt11tttt1tttttttttti;;;t.
//                :11tLGGLfffffttt1111iiiiiiii11111111i1111tttttffft1;;;1.
//            .,;i111tCCLfftt11t11111i1ii1iiiiiii1i1ii11111ttttttfft1;:;:
//          ,:;iiiii1tLLfttftt1iiiiiiiiiiiiiiiii1iii11111i111ttttttti;;;,
//          ;;:;;;::1ffffffLLfftt111111iii1iiiii1ii111111ii11ttttttti;;i,
//          .:::::iLGftffLLLLLLfttttttt1iii11tttttt11iiiii111ttttttti;;;
//            ...;1tt1tfLLLLLLLfftt11t1ttfLCCLLLftt111iiii1111tttttt1ii.
//                    1CLLLLLLLfftttffLGGGGCLLCLft1t11iii111t111ttttt1,
//                    ,ttfffLLLLLfffLLGGLCCff11fttt11iiii11111111tt1t,
//                        ..:;itf1tfffttt;1ti;::11i;;;iiiii111111111i
//                              ..:1t1;::...:;, :1tfi,;ii;ii1111ii;i.
//                                  ..,;;:.....;11tLL;:,:::;;;iiii;:
//                                      ,;... .:,:i;1i,         ...
//                                               ....,
