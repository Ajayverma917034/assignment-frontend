import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { findByEmail, handshaking } from '../../action/connect'
import { useValue } from "../../context/ContextProvider"
import TablesForData from './TablesForData'


const head1 = ["Id", "Title", "Author Id", "ISBN", "Genre"]
const head2 = ["Id", "Title", "Author Id", "ISSN", "Publisher"]

const FindBookByEmail = () => {
    const [open, setOpen] = useState(false)
    const { state: { allBooksAndMagazines }, dispatch } = useValue()
    const bookData = allBooksAndMagazines && allBooksAndMagazines.booksByAuthor;
    const magazineData = allBooksAndMagazines && allBooksAndMagazines.magazinesByAuthor;
    const emailRef = useRef()
    const handleClick = async () => {
        const email = emailRef.current.value
        await findByEmail(email, dispatch);
        setOpen(true)
    }
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
            <Typography fontSize={35}>Welcome to bookSelves</Typography>
            <Typography>Find the book by author email</Typography>
            <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, paddingTop: 8 }}
            >
                <TextField
                    autoFocus
                    margin='normal'
                    variant='standard'
                    label='Email'
                    id='email'
                    type='text'
                    fullWidth
                    inputRef={emailRef}
                    inputProps={{ minLength: 2 }}
                    required
                />
            </Container>
            <Button onClick={handleClick}>Submit</Button>
            {
                open &&
                <>
                    {bookData && <>
                        <Typography style={{ padding: '40px 0', color: '#1976d2' }} fontSize={35}>All available books</Typography>

                        <TablesForData head1={head1} data={bookData} />
                    </>
                    }
                    {
                        magazineData && <>
                            <Typography style={{ padding: '40px 0', color: '#1976d2' }} fontSize={35}>All available magazine</Typography>

                            <TablesForData head1={head2} data={magazineData} />
                        </>
                    }
                    {
                        !bookData && !magazineData && <Typography>No Search found</Typography>
                    }
                </>
            }

        </Container>
    )
}

export default FindBookByEmail