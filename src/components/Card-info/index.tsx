import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import avatar from '../../assets/avatar.jpg'
import CyberpunkButton from '../CyberpunkButton';
import './card-info.less'

const introLists = [
  { name: '文章', count: 0 },
  { name: '标签', count: 0 },
  { name: '分类', count: 0 },
]


export interface CardInfoProps {

}

const CardInfo: React.FC<CardInfoProps> = () => {

  AOS.init({
    duration: 1200
  })

  return (
    <div data-aos="slide-left" className='w-full flex justify-center items-center flex-col px-10 py-5 bg-white bg-opacity-50 hover:shadow-sm'>
      {/* 头像 昵称 */}
      <div className='flex flex-col justify-center items-center'>
        <div className='w-28 h-28'>
          <img src={avatar} alt="头像" className='avatar w-full rounded-full' />
        </div>
        <div className='text-2xl font-bold'>Ha0ran</div>
        <p className='text-gray-600 typing'>不要躺平，不要内卷。</p>
      </div>
      {/* 文章数 标签数 分类数 */}
      <div className='flex justify-center sm:justify-around w-full my-3'>
        {
          introLists.map(item => (
            <div className='text-center cursor-pointer mx-1 sm:mx-0' key={item.name}>
              <div className='font-light'>{item.name}</div>
              <div>{item.count}</div>
            </div>
          ))
        }
      </div>
      {/* follow me！ */}
      <div className='text-center mt-2 flex flex-col '>
        {/* <button className='follow-me'>Follow Me</button> */}
        <CyberpunkButton />
        <a href="https://github.com/Ha0ran2001"><i className='github'>&#xe654;</i></a>
      </div>

    </div>
  );
}

export default CardInfo;