import { Route, Routes } from 'react-router-dom'

import Auth from '../pages/Auth'
import Questions from '../pages/Questions'
import Result from '../pages/Result'
import Setup from '../pages/Setup'

const GlobalRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' index element={<Auth />} />
            <Route exact path='/setup' element={<Setup />} />
            <Route exact path='/questions' element={<Questions />} />
            <Route exact path='/score' element={<Result />} />
        </Routes>
    )
}

export default GlobalRoutes