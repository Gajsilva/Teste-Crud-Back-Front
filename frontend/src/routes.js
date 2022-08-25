import React from "react";
import {Switch, Route} from 'react-router-dom'

import Main from './pages/produto'
import Material from './pages/material'
import Index from './pages/index'

export default function Routes() {
    return(
        <Switch>
            <Route path='/' exact component={Main}/>
    
        </Switch>
    )
}