import Image from 'next/image';
import React from 'react';

const Counter = ({classname,about}) => {
    return (
        <div className='container pt-8 bg-slate-100 rounder-md'>
            <div className={`counter-block ${classname}`}>
                <div className='grid grid-cols-2 gap-y-8 xl:grid-cols-4'>                    

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center count-block'>                                
                                <div className='counter heading3'> {about.setup_growth} </div>
                                <span className='heading3'>K</span>                                
                            </div>
                            <div className='text-center body1 text-secondary'>
                                    Business Setup Growth
                            </div>  
                        </div>
                    </div>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center count-block'>                                
                                <div className='counter heading3'>{about.problem_solving}</div>
                                <span className='heading3'>K</span>                                
                            </div>
                            <div className='text-center body1 text-secondary'>
                                   Problem Solving
                            </div>  
                        </div>
                    </div>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center count-block'>                                
                                <div className='counter heading3'>{about.passive_income}</div>
                                <span className='heading3'>K</span>                                
                            </div>
                            <div className='text-center body1 text-secondary'>
                                    Pasive Income
                            </div>  
                        </div>
                    </div>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center count-block'>                                
                                <div className='counter heading3'>{about.goal_achiever}</div>
                                <span className='heading3'>K</span>                                
                            </div>
                            <div className='text-center body1 text-secondary'>
                                    Goal Achiever
                            </div>  
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    );
};

export default Counter;