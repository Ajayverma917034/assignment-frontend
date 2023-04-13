import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TablesForData({ head1, data }) {
    var i = 0;
    return (
        <TableContainer component={Paper}>
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
                    {data && data.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.author_id}</TableCell>
                            <TableCell align="right">{row.issn || row.isbn}</TableCell>
                            <TableCell align="right">{row.genre || row.publisher}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}