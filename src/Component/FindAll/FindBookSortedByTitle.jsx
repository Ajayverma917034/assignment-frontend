import { Container, Typography } from '@mui/material'
import React from 'react'
import TablesForData from './TablesForData'
import { useValue } from '../../context/ContextProvider'
const head1 = ["Id", "Title", "Author Id", "ISBN/ISSN", "Genre/Publisher"]

const FindBookSortedByTitle = () => {
    const { state: { findAllData }, dispatch } = useValue();
    const data = findAllData && findAllData.sortedItems
    return (
        <Container style={{ paddingTop: 20 }
        }>
            <Typography style={{ padding: '40px 0', color: '#1976d2' }} fontSize={35}>All available books</Typography>
            <TablesForData head1={head1} data={data} />
        </Container>
    )
}

export default FindBookSortedByTitle