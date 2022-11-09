import React, { createContext, useState } from 'react';

import projects from '../data/all-content.json';
const MyContext = React.createContext(projects);

export default MyContext;