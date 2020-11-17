import { Menu, Transition } from "@headlessui/react";
import { FaAngleDown } from 'react-icons/fa'


function DropdownMenu() {
  return (
    <Menu className="text-center">
      {({ open }) => (
        <>
          <Menu.Button className="outline-none flex content-center">Serviços <FaAngleDown className="self-center ml-1" /></Menu.Button>
          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-300 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="grid w-32 text-center absolute bg-indigo-900 outline-none rounded p-2 leading-10">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Mecânica
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Borracharia
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) =>(
                <span className={`${active && "bg-blue-500"}`}>
                  Lava-Jato
                </span>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default DropdownMenu;
