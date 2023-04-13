import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import InfoField from './InfoField'
import { useValue } from '../../context/ContextProvider'
import AddMagazine from './AddMagazine'
import { AddBookAndMagazine } from '../../action/connect'
import TablesForData from './TablesForData'

const head1 = ["Id", "Title", "Author Id", "ISBN/ISSN", "Genre/Publisher"]


const AddBook = () => {
    const { state: { bookData: { id, title, author_id, isbn, genre }, magazine, findAllData1 }, dispatch } = useValue();

    // console.log(findAllData)
    const handleClick = async () => {
        const bookData = { id, title, author_id, isbn, genre }
        await AddBookAndMagazine(bookData, magazine, dispatch);

    }
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
            <Typography fontSize={35}>Welcome to bookSelves</Typography>
            <Typography>For adding a book and a magazines, plese fill these fields</Typography>
            <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, paddingTop: 8, alignItems: 'center' }}

            >
                <Stack
                    sx={{
                        alignItems: 'center',
                        "& .MuiTextField-root": { width: '100%', maxWidth: 500, m: 1 }
                    }}
                    style={{ width: '65%' }}
                >
                    <Typography fontSize={30} color={'#1976d2'}>Enter the Book Data</Typography>
                    <InfoField
                        mainProps={{ name: 'id', label: 'Id', value: id }}
                        minLength={1}
                    />
                    <InfoField
                        mainProps={{ name: 'title', label: 'Title', value: title }}
                        minLength={1}
                    />
                    <InfoField
                        mainProps={{ name: 'author_id', label: 'Author ID', value: author_id }}
                        minLength={1}
                    />
                    <InfoField
                        mainProps={{ name: 'isbn', label: 'ISBN Number', value: isbn }}
                        minLength={1}
                    />
                    <InfoField
                        mainProps={{ name: 'genre', label: 'Genre', value: genre }}
                        minLength={1}
                    />

                </Stack>
                <AddMagazine />


            </Container>
            {
                id.length > 0 && title.length > 0 && author_id.length > 0 && isbn.length > 0 && genre.length > 0 &&
                magazine.id.length > 0 && magazine.title.length > 0 && magazine.author_id.length > 0 && magazine.issn.length > 0 && magazine.publisher.length > 0 && <Button sx={{ mt: 4 }} variant='contained' onClick={handleClick}>Submit</Button>
            }
            {
                findAllData1 !== 'null' ? <TablesForData head1={head1} data={findAllData1} /> : <></>
            }

        </Container>
    )
}

export default AddBook