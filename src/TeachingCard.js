import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function TeachingCard(props) {
    return (
        <div>
            <Card sx={{ width: "40vw", height: "calc(60px - 1vw)", minHeight: "calc(300px - 13vw)" }}>
                <CardActionArea href={props.addr} target="_blank">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "left", fontWeight: "bold"}}>
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: "left", fontWeight: 500}}>
                            {props.subtitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default TeachingCard;