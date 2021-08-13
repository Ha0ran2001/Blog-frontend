import * as React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../../components/Card-info';

import api from '../../api';
import './category.css'

export interface CategoryProps {

}

const Category: React.FC<CategoryProps> = () => {

  const [types, setTypes] = React.useState([]);

  async function getTypes() {
    const res = await api.articleType.getAllTypes();
    setTypes(res.data.data);
  }

  React.useEffect(() => {
    getTypes();

  }, []);

  return (
    <div className='min-h-screen'>
      <div className='flex justify-center mt-10'>
        <div className='w-full md:w-3/5 m-5 p-10'>
          <div className='text-center text-3xl whitespace-nowrap'>分类({types.length})</div>
          <div className='flex flex-wrap justify-start sm:flex-col'>
            {
              types && types.map((item: { typeName: string, id: number }, index) => {

                return (
                  <Link to={`/categoryItem/${item.typeName}/${index}`} key={index}>
                    <div key={item.id} className="category_item mx-1" >
                      <i className='circleIcon'>&#xeb74;</i>
                      <span className="ml-1">{item.typeName}</span>
                    </div></Link>
                )
              })
            }
          </div>
        </div>
        {/* 
        <div className='w-full md:w-1/3 lg:w-1/6'>
          <CardInfo />
        </div> */}
      </div>

    </div>
  );
}

export default Category;


//        .,,,,.
//       :::;;ii,                                         .,,,
//      .;,it1t11.                                        ;i:;,
//       ,;:111i1i                                        .::;.
//        :iii;ii1:.....                        ....        ;;,
//         .11;::i;;;;:;:.                  ..,;;iii;.      ,;;,
//        ,;;;;;:;;i:,:;;;,            .,:;;ii;;;;;;;;. ..,,.,:;::;:
//      .;i;:::;1ttti,::::;;.        .;iii;;;;:::::,,,;i11t11ii;,:i:
//      ii;;;:;i1i;::::::,,;;:       :i;;;;::::::::;;::i1111111;;;1i;.
//     :i;:::::,:::,,,,,,,,,:i;.     .i;;;;;;iiiii;,,,,;i11111i;;::;;.
//     i;;;:::,,,,,,,,,::;:,iii:..,,;tCCCGG00Gfiiii;;;;;iiii;:,. .,,,
//    ,i:::,,,....,,,,,:::,:i;,:::ifG888880Cf1i;;;:;i;;:,,.         ,.
//    ,i::,,;:,...,,,,,,,,,,,,:;iffffffft1i;:::,,,,,,.              .,
//     ,:::,:;,...,....,itLCGG00GL111;::::::,,...                    ,
//           .::,,,...,iG88800Gf11111;,,,,..                         .,
//             :;,.,,,;1tt111111ii;;:,.                               :
//              ,;,,::::;;iii;;:,.                                    ,.
//               ,;,,:;;:::,.                                          .
//              .,;,.::..                                              .:
//             .;;i,:ii,                                                ;.
//              ..;;1:ii,                                               .,
//                  :i.i1:                                              .:;;;:;:
//                   i;.;t;                                            .iiiiii;:
//                   .;. ,t,              CHANGE MY MIND               ....,,;i,
//                        ,;.                                  ..,,..    .:,
//                         ,,                             ..,,..
//                          .:                          ....
//                           ,:                      .
//                            :,                ..
//                            .;.
//                          .,;t;;;,...
//                         .;iff1;i,,,.
//                          ,i;,.:;,
//                          .,   .:,
