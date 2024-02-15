'use client';

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from './Button';

import logo from '/public/Desktop/logo.png'




function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='fixed w-full px-4 py-3 z-10'>
      <div className='flex justify-between items-center w-full bg-transparent'>
        <div className='flex flex-shrink-0'>
          <Image priority height={72} width={196} src={logo} alt='logo'></Image>
        </div>
        <div className='md:flex hidden grow justify-end'>
          <ul className='flex'>
            <li className='mx-1'><Button variant='default' size='default' ><a href='#'>客房旅宿</a></Button></li>
            <li className='mx-1'><Button variant='default' size='default' ><a href='member'>會員登入</a></Button></li>
            <li className='mx-1'><Button variant='default' size='default' ><a href='#'>立即訂房</a></Button></li>
          </ul>
        </div>
        <div className='flex flex-shrink-0 md:hidden'>
          <Button variant='ghost' size='icon'
            onClick={openModal} >
            <Bars3Icon/>
          </Button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-dvh items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col w-full h-full transform overflow-hidden py-2 px-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4 flex flex-row-reverse">
                    <Button variant='ghost' size='icon' 
                      onClick={closeModal} >
                      <XMarkIcon/>
                    </Button>
                  </div>

                  <div className="mt-2 flex grow justify-center items-center">
                    <button className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                    </button>
                  </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
