import React from 'react';
import { compose, setDisplayName } from 'recompose';

export default compose(setDisplayName('About'))(() => <div>about page</div>);
