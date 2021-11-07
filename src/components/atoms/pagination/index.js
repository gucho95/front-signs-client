import React from 'react';
import RcPagination from 'rc-pagination';
import './index.scss';
import { LeftArrow, RightArrow } from '@atoms/icons';

const Pagination = (props) => {
  return (
    <div className='pagination-root'>
      <RcPagination
        {...props}
        showPrevNextJumpers={true}
        prevIcon={<LeftArrow className='w-6 h-6 text-blue-dark fill-current' />}
        nextIcon={<RightArrow className='w-6 h-6 text-blue-dark fill-current' />}
      />
    </div>
  );
};

export default Pagination;
