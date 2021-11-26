import React from 'react'
import './footer.less'


export interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

  return (
    <div className='py-16 flex flex-col justify-center items-center clear-both'>
      <div className='text-gray-400'>
        <span>©2021 - 2021</span>
        <i className='iconfont mx-1'>&#xe637;</i>
        <span>Ha0ran</span>
      </div>
      <div className='text-gray-400 hidden sm:block'>使用技术：vite + tailwindcss</div>
    </div>
  );
}

export default Footer;