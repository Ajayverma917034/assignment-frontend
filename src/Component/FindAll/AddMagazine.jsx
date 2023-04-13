import React from 'react'
import InfoField2 from './InfoField2'
import { Stack, Typography } from '@mui/material'
import { useValue } from '../../context/ContextProvider';

const AddMagazine = () => {
    const { state: { magazine: { id, title, author_id, issn, publisher }, } } = useValue();
    return (
        <Stack
            sx={{
                alignItems: 'center',
                "& .MuiTextField-root": { width: '100%', maxWidth: 500, m: 1 }
            }}
            style={{ width: '65%' }}
        >
            <Typography fontSize={30} color={'#1976d2'}>Enter the Magazine Data</Typography>
            <InfoField2
                mainProps={{ name: 'id', label: 'Id', value: id }}
                minLength={1}
            />
            <InfoField2
                mainProps={{ name: 'title', label: 'Title', value: title }}
                minLength={1}
            />
            <InfoField2
                mainProps={{ name: 'author_id', label: 'Author ID', value: author_id }}
                minLength={1}
            />
            <InfoField2
                mainProps={{ name: 'issn', label: 'ISSN Number', value: issn }}
                minLength={1}
            />
            <InfoField2
                mainProps={{ name: 'publisher', label: 'Publisher', value: publisher }}
                minLength={1}
            />

        </Stack>
    )
}

export default AddMagazine