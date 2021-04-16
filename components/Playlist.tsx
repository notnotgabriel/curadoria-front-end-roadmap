import classnames from 'classnames';

const Playlist = ({ branches, activeBranch, activeLink, onSkillClick }) => {
  return (
    <div className='p-3 border-gray-200 rounded lg:bg-white lg:py-0 lg:border-2 lg:overflow-y-scroll h-[490px]'>
      {branches.map((branch, branchIndex) => {
        return (
          <div className='mb-5' key={branchIndex}>
            <h1 className='text-center my-2 font-bold text-lg text-gray-700 lg:my-4'>
              {branch.title}
            </h1>
            <div className='bg-white rounded border'>
              <ul>
                {branch.links.map((link, linkIndex) => {
                  const isLinkActive =
                    activeBranch === branchIndex && activeLink === linkIndex;
                  return (
                    <li
                      key={linkIndex}
                      className={classnames('border-b-2', {
                        'last:border-0': !isLinkActive,
                        'bg-gray-200 text-red-600 border-red-600': isLinkActive,
                      })}
                    >
                      <div
                        role='button'
                        className='flex items-center px-4 py-2 h-20'
                        onClick={() => onSkillClick([branchIndex, linkIndex])}
                      >
                        <span className='mr-5'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                        <p className={classnames('text-sm text-gray-800')}>
                          {link.title}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
