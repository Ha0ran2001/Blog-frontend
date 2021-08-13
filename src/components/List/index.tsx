import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './list.css';


export interface ListProps {
  id: number,
  title: string,
  introduce: string,
  createTime: number | null,
  visitCount: number | null,
  typeName: string,
}

const List: React.FC<ListProps> = ({ id, title, introduce, createTime, visitCount, typeName }) => {

  const history = useHistory();


  return (
    <div className="p-4 sm:p-10 border-b-2 bg-white bg-opacity-50">
      <div className="text-2xl sm:text-3xl md:text-4xl">{title}</div>
      <div className="text-overflow text-base md:text-xl my-5 text-gray-400">{introduce}</div>
      <div className="flex justify-between">
        <div className="flex items-center text-gray-300 text-xs sm:text-base">
          <span>Ha0ran</span>
          <span className="text-3xl mx-1">·</span>
          <span>{createTime}</span>
          <span className="text-3xl mx-1">·</span>
          <span>{typeName}</span>
        </div>
        <div className="text-xl arrow-hidden cursor-pointer" onClick={() => history.push(`/detail/${id}`)}>
          <span className='hidden sm:inline'>查看这篇</span>
          <i className="arrow">&#xe60c;</i>
        </div>
      </div>
    </div>
  );
}

export default List;