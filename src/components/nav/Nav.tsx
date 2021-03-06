import * as React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './nav.less'
import useDark from '../../utils/hooks/useDark';

export interface NavProps {

}

const headerLists = [
  {
    title: '主页',
    path: '/'
  },
  {
    title: '文章类别',
    path: '/category'
  },
  {
    title: '关于我',
    path: '/aboutme'
  }
];

const NameClass = 'font-bold text-gray-900 dark:text-gray-300';
export const hoverTransition = 'transition-colors ease-in-out duration-500';
const iconClass = 'h-10 w-10 px-2 py-2 hover:bg-gray-200 text-gray-600 rounded-full';

const Nav: React.FC<NavProps> = () => {

  const history = useHistory();

  const [theme, setTheme] = useDark();

  const headerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className='min-h-screen fixed flex flex-col top-0 left-0' ref={headerRef}>
      <div className='flex justify-center items-center '>
        <span className={`${NameClass} text-2xl`}>｛</span>
        <Link to='/'><div className={`${NameClass} mx-2 `}>Ha0ran</div></Link>
        <span className={`${NameClass} text-2xl`}>｝</span>
      </div>

      <div className='flex flex-col flex-1 justify-around items-center'>
        {headerLists.map(item => (
          <Link
            to={`${item.path}`}
            // onClick={() => history.push(`${item.path}`)}
            key={item.title}
            className={`text-gray-300 cursor-pointer px-4 py-2 rounded-md whitespace-nowrap transform -rotate-90`}>
            {item.title}
          </Link>
        ))}

        {
          theme === 'light'
            ? <svg onClick={() => setTheme('dark')} xmlns="http://www.w3.org/2000/svg" className={`${iconClass} ${hoverTransition} animate-spin`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            : <svg onClick={() => setTheme('light')} xmlns="http://www.w3.org/2000/svg" className={`${iconClass} ${hoverTransition}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        }

      </div>
    </div>
  );
}

export default Nav;