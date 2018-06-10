import React from 'react';
import { compose, setDisplayName } from 'recompose';

export default compose(setDisplayName('Home'))(() => <div>content</div>);
