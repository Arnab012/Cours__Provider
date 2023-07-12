import React from 'react'
import { Box, Grid } from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from "../DashBoard/SideBar"

const Users = () => {
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

export default Users
