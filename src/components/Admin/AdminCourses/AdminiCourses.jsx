import React from 'react'
import { Box, Grid } from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from "../DashBoard/SideBar"

const AdminiCourses = () => {
  return (
    <>
    <Grid
      minH={'100vh'}
      css={{
        cursor: `url(${cursor}),default`,
      }}
      templateColumns={['1fr', '5fr 1fr']}
    >


      <Box></Box>
      <SideBar/>
    </Grid>
  </>
  )
}

export default AdminiCourses
