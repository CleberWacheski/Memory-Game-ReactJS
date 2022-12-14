import { LevelOne } from '../src/pages/levelOne'
import { Home } from "./pages/Home"
import { Auth } from "./pages/auth"
import { LevelTwo } from '../src/pages/levelTwo'

import { Routes as RoutesV6, Route } from "react-router-dom";
import { Records } from './pages/records';

export const Routes = () => {
    return (
        <RoutesV6 >
            <Route path="/" element={<Auth />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/LevelOne" element={<LevelOne />} />
            <Route path="/LevelTwo" element={<LevelTwo />} />
            <Route path='/Records' element={<Records />} />
        </RoutesV6>
    )
}