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

                  const isVideoContent = link.url.includes('youtube');

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
                          {isVideoContent ? (
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
                          ) : (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                              />
                            </svg>
                          )}
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
