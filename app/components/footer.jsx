// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub, BsInstagram, BsLinkedin, BsThreads, BsTwitterX } from 'react-icons/bs';
import { RiCopyrightLine } from 'react-icons/ri';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className='flex items-center gap-1'>
            <span><RiCopyrightLine /></span> Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/kavit-desai-071232200/" className="text-[#16f2b3]">Kavit Desai</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={personalData.github}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <BsLinkedin size={20} />
            </Link>
            <Link
              target="_blank"
              href={personalData.threads}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <BsThreads size={20} />
            </Link>
            <Link
              target="_blank"
              href={personalData.instagram}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <BsInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;