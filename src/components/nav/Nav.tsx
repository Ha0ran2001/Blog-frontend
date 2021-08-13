import * as React from 'react';
import './nav.less'
import { Link } from 'react-router-dom'

export interface NavProps {

}

const Nav: React.FC<NavProps> = () => {

  return (
    <div className='h-16'>
      <div className='w-full h-16 bg-white bg-opacity-50 shadow-navShadow ground-glass fixed'>
        <div className='px-16 flex justify-between h-full items-center'>
          <div className='font-bold w-64'>
            <Link to='/'>
              <div className='float_shadow'>Ha0ran的博客</div>
            </Link>
          </div>
          <div className='hidden sm:flex sm:justify-around sm:w-2/5'>
            <div className='flex underline_from_center'>
              <i className='navicon hidden lg:inline'>&#xe61d;</i>
              <span>搜索</span>
            </div>
            <div className='flex underline_from_center'>
              <Link to="/aboutme">
                <i className='navicon hidden lg:inline'>&#xe606;</i>
                <span>关于</span>
              </Link>
            </div>

            <div className='flex underline_from_center'>
              <i className='navicon hidden lg:inline'>&#xe874;</i>
              <span>友链</span>
            </div>

            <div className='flex underline_from_center'>
              {/* <Link to='/message'> */}
              <i className='navicon hidden lg:inline'>&#xe693;</i>
              <span>留言</span>
              {/* </Link> */}
            </div>

            <div className='flex underline_from_center'>
              <Link to='/category'>
                <i className='navicon hidden lg:inline'>&#xe69b;</i>
                <span>分类</span>
              </Link>
            </div>

            <div className='flex underline_from_center'>
              <Link to='/'>
                <i className='navicon hidden lg:inline'>&#xe527;</i>
                <span>首页</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;