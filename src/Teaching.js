import React from 'react';
import TeachingCard from './TeachingCard.js';

function Teaching() {
    return (
        <div>
            <h3>Teaching</h3>
            <div className="projects_array">
                <TeachingCard addr="https://drive.google.com/drive/folders/1LaA7wGzVV_2clCcrQ6oF3c_AvNIq09AR?usp=drive_link" title="Math 2400: Spring 2024" subtitle="Recitation Notes"/>
                <TeachingCard addr="https://drive.google.com/drive/folders/1-jms686NRwDO7xLsmlKSAPcO2tFeNIGB?usp=sharing" title="Math 2400: Fall 2023" subtitle="Recitation Notes"/>
            </div>
            
            
        </div>
    );
}

export default Teaching;