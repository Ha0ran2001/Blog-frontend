import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './list.css';
import { hoverTransition } from '../nav/Nav'

export interface ListProps {
  id?: number,
  title?: string,
  introduce?: string,
  createTime?: number | null,
  visitCount?: number | null,
  typeName?: string,
}

const List: React.FC<ListProps> = ({
  title,
  createTime,
  typeName,
  id
}) => {

  AOS.init({
    duration: 1200,
  })
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/detail/${id}`)}
      data-aos="zoom-in"
      className={`flex flex-col justify-around my-5 border-[1px] px-5 py-3 w-[400px] h-[300px] hover:border-gray-500 transition-colors ease-in-out duration-1000`}
    >
      {/* 标题 */}
      <header className='text-center text-2xl font-bold dark:text-gray-300'>{title}</header>
      {/* 分类 */}
      <hr className='mx-7 my-5' />
      <div className='text-center text-xl text-gray-600 dark:text-gray-500'>{typeName}</div>
      {/* 名字、时间 */}
      <div className='flex justify-between'>
        <div className='text-gray-300 text-sm'>{createTime}</div>
        <div className='text-gray-300 text-sm'>Ha0ran</div>
      </div>
    </div>
  );
}

export default List;