import React, { useEffect } from 'react';
import belloteroIcon from '@/assets/bellotero.svg';
import { useDispatch, useSelector } from '@/redux/store';
import { isStatusIn } from '@/utils';
import { NavLink } from 'react-router-dom';
import { fetchMenu } from './menu-slice';

export function MainNavbar() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.menu.status);
  const items = useSelector((state) => state.menu.items);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (isStatusIn(status, ['idle', 'loading'])) {
    return null;
  }

  return (
    <header className="flex flex-col bg-white">
      <div className="flex items-center w-full min-h-[64px] pl-[174px] pr-[173px]">
        <div className="flex-grow">
          <span>
            <img src={belloteroIcon} alt="Brand Icon" />
          </span>
        </div>

        <div className="flex self-stretch">
          {items.map((item) => (
            <NavLink
              to={item.route}
              className="flex items-center text-[14px] font-medium tracking-[0.3px] text-cobalt-blue ml-[40px] first:ml-0"
              activeClassName="border-t-4 border-solid border-cobalt-blue"
              end
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
