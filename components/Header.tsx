import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

const Header = ({ navLinks }) => {
  const { query } = useRouter();
  return (
    <nav className='h-15 py-4 px-20 bg-white'>
      <ul className='flex flex-row justify-between uppercase md:justify-end'>
        {navLinks.map(({ id, title }) => {
          return (
            <li key={id} className='md:mr-5 md:last:mr-0'>
              <Link href={`/${id}`}>
                <a
                  className={classnames('p-1 text-gray-700', {
                    'border-b-2 border-red-600': id === query?.id,
                  })}
                >
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
