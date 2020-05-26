import React from 'react';
import NavButton from './NavButton';
import NavProgressBar from './NavProgressBar';
import ThemeContext from '../steps/StepsContext';

const Nav = ({ onClick }) => (
    <ThemeContext.Consumer>
        {({ steps, currentStep }) => {
             return (<section className="flex flex-col mb-20">
                  <header className="pl-4 mb-10 text-gray-700 font-semibold">Add book - New book</header>
                  <div className="flex">
                       {steps.map((step, idx) =>
                           <React.Fragment key={idx}>
                                { idx !== 0 && <NavProgressBar/> }
                                <NavButton isActive={currentStep === step} step={idx + 1} name={step}/>
                           </React.Fragment>
                       )}
                       { steps.length === 2 && <React.Fragment><NavProgressBar/> <NavButton step="..."/></React.Fragment> }
                  </div>
             </section>)
        }}
     </ThemeContext.Consumer>);

export default Nav;