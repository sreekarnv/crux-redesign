import React, { createContext, useState } from 'react';

import CMSbgimg from './../../assets/card-images/cms.png';
import EventManagerimg from './../../assets/card-images/fest-manager.jpeg';
import BatchsnapsImg from './../../assets/card-images/batchsnaps-sort.svg';

import apple from './../../assets/icons/apple.svg';
import android from './../../assets/icons/android.svg';
import microsoft from './../../assets/icons/microsoft.svg';

export const ProjectContext = createContext();

const ProjectContextProvider = props => {

    const [projects] = useState([
        {
            title: 'CMS BPHC',
            bgimg: CMSbgimg,
            body: 'The CMS app uses standard Moodle endpoints from the server hosted at the CMS website.',
            icons: {
                iOS: apple, android
            }
        },
        {
            title: 'Event Manager',
            bgimg: EventManagerimg,
            body: 'It is a Single Page Express App that can be used to easily deploy websites for college fests',
            icons: { macOS: apple, windows: microsoft }
        },
        {
            title: 'BatchSnaps Sorter',
            bgimg: BatchsnapsImg,
            body: 'This project  makes the distribution of batchsnaps easier, both for students, and various clubs.',
            icons: { iOS: apple, windows: microsoft }
        },
    ]);

    return (
        <ProjectContext.Provider value={[...projects]}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider
