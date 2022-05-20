import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import Link from 'next/link'

export default function Company_Menu() {
  return (
    <>
      <div className="w-[200px] p-3 bg-white shadow-lg ">
        <ol className="space-y-2 ">
          <li className="text-black hover:text-[#8DC63F] text-base font-normal">
            <Link
              href="/company"
              className="flex items-center"
            >
              <a className='flex items-center'>
                <span className="mr-3">
                  <AiFillQuestionCircle />
                </span>
                About us
              </a>
            </Link>
      
          </li>
          <li className="text-black hover:text-[#8DC63F] text-base font-normal">
            <Link href="/career" className="flex items-center">
              <a className='flex items-center'>
                <span className="mr-3">
                  <FaUserAlt />
                </span>
                Career
              </a>
            </Link>
          </li>
          <li className="text-black hover:text-[#8DC63F] text-base font-normal">
            <Link href="/contact-us" className="flex items-center">
              <a className='flex items-center'>
                <span className="mr-3">
                  <AiFillMessage />
                </span>
                Contact Us​
              </a>
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}
