import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MenuList from "./MenuList"

export default function ActionAreaCard({ categories }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='h6'>{categories.name}</Typography>

                    <MenuList categories={categories?.childCategories} limit={3} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
