import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { useRef, useState, useEffect } from 'react';

function ProjectCard(props) {

    const videoRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the viewport width is less than or equal to 768px (commonly used breakpoint for mobile devices)
        setIsMobile(window.innerWidth <= 768);
      }, [window.innerWidth]);

    useEffect(() => {
        if (isMobile && videoRef.current) {
            videoRef.current.play();
        }
        if (!videoRef.current) {
            videoRef.current.pause();
        }
    }, [videoRef.current]);

    useEffect(() => {
        // When the component mounts, set the playback speed to 2x
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.75;
        }
    }, []);

    var contentType = null;
    // if playable is true, then CardMedia should be of type video
    // otherwise it should be of type image
    if (props.playable === true) {
        contentType = (
            <CardMedia
                component="video"
                image={props.image}
                sx={{  width: "38vw", minWidth: "350px", maxHeight: 400 }}
                alt={props.name}
                onMouseOver={event => 
                    {if (event.target.paused) {
                        // pause all other playing videos
                        document.querySelectorAll('video').forEach(video => {
                            if (video !== event.target && !video.paused) {
                                video.pause();
                            }
                        });
                        event.target.play();
                    }}
                }
                controls
                ref={videoRef}
                muted
            />
        )
    } else {
        contentType = (
            <CardMedia
                component="video"
                sx={{  width: "38vw", minWidth: "350px", maxHeight: "calc(135px + 12vw)", objectFit: "cover", objectPosition: "bottom"}}
                image={props.image}
                alt={props.name}
                ref={videoRef}
                muted
            />
        )
    }

    return (
        <div>
            <Card sx={{ width: "38vw", minWidth: "350px", height: "calc(670px - 2vw)" }}>
                <CardActionArea>
                    {contentType}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "left", fontWeight: "bold"}}>
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: "left", fontWeight: 500}}>
                            Role: {props.role}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: "left", height: "calc(220px - 7vw)"}}>
                            Description: {props.description}
                            <br/><br/>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: "left"}}>
                            Duration: {props.duration}
                        </Typography>
                        {props.icons}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ProjectCard;