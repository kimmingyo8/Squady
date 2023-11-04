import Link from 'next/link';
import { useState } from 'react';
import 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="navbar">
        <h1>
          <Link href="/" className="navbar__logo">
            Squady
          </Link>
        </h1>
        <div className="navbar__list">
          <Link href="/meetings" className="navbar__list--item">
            모임 목록
          </Link>
          <Link href="/meetings/new" className="navbar__list--item">
            모임 생성
          </Link>
          <Link href="/users/meeting" className="navbar__list--item">
            참여 모임
          </Link>
          <Link href="/users/login" className="navbar__list--item">
            로그인
          </Link>
        </div>

        {/* mobile button */}
        <button
          className="navbar__button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </button>
      </header>

      {/* mobile navbar */}
      {isOpen && (
        <header className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link href="/meetings" className="navbar__list--item--mobile">
              모임 목록
            </Link>
            <Link href="/meetings/new" className="navbar__list--item--mobile">
              모임 등록
            </Link>
            <Link href="/users/meeting" className="navbar__list--item--mobile">
              참여 모임
            </Link>
            <Link href="/users/login" className="navbar__list--item--mobile">
              로그인
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
