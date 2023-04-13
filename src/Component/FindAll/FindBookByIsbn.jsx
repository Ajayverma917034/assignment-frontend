import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useValue } from '../../context/ContextProvider'
import TablesForData from './TablesForData'
import { findByisbn } from '../../action/connect'


const head1 = ["Id", "Title", "Author Id", "ISBN", "Genre"]
const head2 = ["Id", "Title", "Author Id", "ISSN", "Publisher"]

const FindBookByIsbn = () => {
    const [open, setOpen] = useState(false)
    const { state: { findByIsbn }, dispatch } = useValue()
    const data = findByIsbn && findByIsbn.booksByAuthor
    const isbnRef = useRef()
    const handleClick = async () => {
        const isbn = isbnRef.current.value
        await findByisbn(isbn, dispatch);
        setOpen(true)

    }
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
            <Typography fontSize={35}>Welcome to bookSelves</Typography>
            <Typography>Find the book by ISBN</Typography>
            <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, paddingTop: 8, width: '60%' }}
            >
                <TextField
                    autoFocus
                    margin='normal'
                    variant='standard'
                    label='ISBN'
                    id='isbn'
                    type='text'
                    fullWidth
                    inputRef={isbnRef}
                    inputProps={{ minLength: 2 }}
                    required

                />
            </Container>
            <Button onClick={handleClick}>Submit</Button>
            {
                open && <>
                    {
                        data ? <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {
                                            head1 && head1.map((item, index) => (
                                                <>{


                                                    item === 'Id' ? <TableCell key={index}>{item}</TableCell> :
                                                        <TableCell align="right" key={index}>{item}</TableCell>
                                                }
                                                </>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow
                                        key={findByIsbn.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            1
                                        </TableCell>
                                        <TableCell align="right">{data.title}</TableCell>
                                        <TableCell align="right">{data.author_id}</TableCell>
                                        <TableCell align="right">{data.issn || data.isbn}</TableCell>
                                        <TableCell align="right">{data.genre || data.publisher}</TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer> : <Typography>There No search found!</Typography>

                    }

                </>
            }

        </Container>
    )
}

export default FindBookByIsbn