import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../components/home/Sidebar'

const Home = () => {
    const {auth} = useSelector(state => state)
    return (
        <div>
            <Sidebar auth={auth} />
        </div>
    )
}

export default Home
