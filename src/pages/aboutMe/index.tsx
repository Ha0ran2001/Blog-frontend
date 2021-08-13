import * as React from 'react';

import CardInfo from '../../components/Card-info';

export interface AboutMeProps {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col sm:flex-row md:justify-around lg:justify-center mt-10'>
        <div className='w-2/5 m-5  p-10'>
          <div className='text-2xl'>关于我</div>
          <div className='my-5'>喜欢CSS JavaScript</div>
          <div>创建本站原因：</div>
          <ul>
            <li>作为自己学习中整理的知识的存放地</li>
            <li>前后端自己动手，培养独立开发能力，扩充技术栈</li>
          </ul>
        </div>
        <div className='w-full lg:w-1/6 md:w-1/3'>
          <CardInfo />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;