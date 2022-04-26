import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'w3-css/w3.css'
import items from './items'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react'

const roomUrl = '/images/favorites/room.png';
const businessUrl = '/images/favorites/business.png';
const viewUrl = '/images/favorites/view-carousel.png';


const boxstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

const MainContent: NextPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Your dashboard</h1>
            {
                <div>
                    <div className={styles.category}>{items.title}</div>
                    <div className='row'>
                        {
                        items.items.map((subitem, key)=>
                        <div className={styles.cardStyle} key={key}>
                            <img src={subitem.photoUrL} width="100%" />
                            <br/>
                            <div className={styles.cardTitle}><b>{subitem.title}</b></div>
                            <div className={styles.cardContent}>{subitem.content}</div>
                            <div className={styles.cardInfo}>
                                <img src={roomUrl} /> 
                                <div className={styles.infoDetail}>{subitem.room}</div>
                                <img src={viewUrl} />
                                <div className={styles.infoDetail}>{subitem.view}</div>
                                <img src={businessUrl} />
                                <div className={styles.infoDetail}>{subitem.business}</div>
                            </div>
                            <div className='w3-center'><button className={styles.detailView}>View listing details</button></div>
                        </div>
                        )}
                    </div>
                </div>
            }
            {/* <div className={styles.submitBtn}><button className={styles.btnStyle} onClick={handleOpen}>SUBMIT BALLOT <br></br>BUTTON</button></div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={boxstyle}>
                <button className={styles.closebtn} onClick={handleClose}><h1>x</h1></button>
                <br></br>
                <Typography id="modal-modal-title" className='w3-center'>
                    SUCCESS
                </Typography>
                </Box>
            </Modal> */}
        </div>
    );
}

export default MainContent;