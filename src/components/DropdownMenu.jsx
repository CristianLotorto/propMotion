import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Profile from './Profile';
import LogoutButton from './Logout';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu() {
t [hideProperty, setHideProperty]=useState(true);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium ">
          <Profile />
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-700"
        enterFrom="transform opacity-0 scale-0"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-700"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-0"
      >
        <Menu.Items className="absolute -right-4 z-10 mt-3 w-60 origin-top-right divide-y divide-slate-100 rounded-md bg-yellow-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-yellow-800 hover:bg-yellow-700 text-slate-100 rounded-md' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <p className='text-slate-100 text-center w-full h-full font-quantico tracking-widest font-semibold'>Configuracion</p>
                </a>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-yellow-800 hover:bg-yellow-700 text-slate-100 rounded-md' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <LogoutButton />
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}