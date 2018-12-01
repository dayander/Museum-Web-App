import React from 'react';
import MainNav from './mainNav';
import {FilterButtonHolder} from './FilterButtonHolder';
import VisibleInstructionsHeader from '../containers/VisibleInstructionsHeader';


export const Header = () => {



  return(
      <header>
          <div id={'top-holder'} className={'fixed-top'}>
              <VisibleInstructionsHeader/>
              <FilterButtonHolder/>
              <MainNav />
          </div>
      </header>
  )
};