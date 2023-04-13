import React from 'react'
import TablesForData from './TablesForData'
import { Container, Typography } from '@mui/material'
import { AllData } from '../../action/connect'
import { useValue } from '../../context/ContextProvider'

const head1 = ["Id", "Title", "Author Id", "ISBN", "Genre"]
const head2 = ["Id", "Title", "Author Id", "ISSN", "Publisher"]

const FindAll = () => {
    const { state: { allBooksAndMagazines } } = useValue()
    const bookData = allBooksAndMagazines.books;
    const magazineData = allBooksAndMagazines.magazines;
    return (
        <Container style={{ paddingTop: 20 }
        }>
            <Typography style={{ padding: '40px 0', color: '#1976d2' }} fontSize={35}>All available books</Typography>
            <TablesForData head1={head1} data={bookData} />

            <Typography style={{ padding: '40px 0', color: '#1976d2' }} fontSize={35}>All available magazine</Typography>
            <TablesForData head1={head2} data={magazineData} />


        </Container>
    )
}

export default FindAll