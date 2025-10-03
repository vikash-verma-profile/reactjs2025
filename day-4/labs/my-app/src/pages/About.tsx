import React from 'react';
import withHeader from '../hoc/withHeader';

type AboutProps = {
    description?: string;
}

const About: React.FC<AboutProps> = ({ description }) => {
    return (
        <div>
            <p>This is the about page content</p>
            {description && <p>{description}</p>}
        </div>

    );
}

export default withHeader(About,"About page Header");