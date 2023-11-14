import React, { useState } from 'react';
import UserDetails from './UserDetails';
import Kyc from './Kyc/Kyc';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Grid } from "@mui/material";
import Sidebar from './Sidebar';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [editActive, setEditActive] = useState(false);

    const handleEditClick = () => {
        console.log(`edit cliks`)
        setEditActive(true);
    }

    return (
        <>
            <Grid container sx={{
                marginTop: '4rem'
            }}>
                <Sidebar />
                <Grid item sx={{
                    // border: '2px solid red',
                    display: 'flex',
                    justifyContent: 'center',
                    mx: 'auto',
                    my: 5
                }}>
                    {/* <UserDetails editActive={editActive} /> */}
                    <Routes>
                        <Route index element={<UserDetails />} />
                        <Route path="./" element={<UserDetails />} />
                        <Route path='/profile/kyc' element={<Kyc />} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    )
}

export default Profile