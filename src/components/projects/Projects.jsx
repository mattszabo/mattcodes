import React from 'react';
import { compose, setDisplayName } from 'recompose';

export default compose(setDisplayName('Projects'))(() => <div>projects</div>);
