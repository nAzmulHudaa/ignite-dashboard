import React from 'react';
import AddAchive from '../Components/AddAchive';
import AddCause from '../Components/AddCause';
import AddCounterData from '../Components/AddCounterData';
import AddEvents from '../Components/AddEvents';
import AddFeatured from '../Components/AddFeatured';

const HomeEdit = () => {
    return (
        <div className='mt-3'>
            <h3 className='headingDashboard' style={{color:'red'}}>Add Home Page Contents</h3>
            <AddCause/>
            <AddEvents/>
            <AddFeatured/>
            <AddAchive/>
            <AddCounterData/>
        </div>
    );
};

export default HomeEdit;