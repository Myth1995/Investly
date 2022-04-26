import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'w3-css/w3.css'
import items from './items'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const roomUrl = '/images/favorites/room.png';
const businessUrl = '/images/favorites/business.png';
const viewUrl = '/images/favorites/view-carousel.png';

const up = '/images/finance/up.png';
const down = '/images/finance/down.png';
const vector = '/images/finance/vector.png';

const MainContent: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerDiv}>
                <h1 className={styles.header}>Your dashboard</h1>
                
                <div className={styles.headerTool}>
                    <img src={'/images/notifications.png'} height={20}/>
                    <img src={'/images/search.png'}  height={20}/>
                </div>
            </div>

            <div className={styles.financeGroup}>
                <div className={styles.financeItem}>
                    <div className={styles.financeInfo}>
                        <div className={styles.financeTitle}>Todays sales</div>
                        <div className={styles.financeValue}>2,456</div>
                    </div>
                    <div className={styles.pieChart}>
                        <img src={up} className={styles.pieInfo} />
                        <PieChart
                            data={[
                                { title: 'Sales', value: 65, color: "#44C13C"},
                                { title: 'Not Sales', value: 35, color: "#E6FBD9"},
                            ]}
                            lineWidth={15}
                            paddingAngle={2}
                            startAngle={10}
                            rounded={true}
                            animate={true}
                        />
                    </div>
                </div>
                
                <div className={styles.financeItem}>
                    <div className={styles.financeInfo}>
                        <div className={styles.financeTitle}>New Products</div>
                        <div className={styles.financeValue}>221</div>
                    </div>
                    <div className={styles.pieChart}>
                        <img src={vector} className={styles.pieInfo} />
                        <PieChart
                            data={[
                                { title: 'Sales', value: 65, color: "#4040F2"},
                                { title: 'Not Sales', value: 35, color: "#D8D8FE"},
                            ]}
                            lineWidth={15}
                            paddingAngle={2}
                            startAngle={10}
                            rounded={true}
                            animate={true}
                        />
                    </div>
                </div>
                
                <div className={styles.financeItem}>
                    <div className={styles.financeInfo}>
                        <div className={styles.financeTitle}>Inventory</div>
                        <div className={styles.financeValue}>1,425</div>
                    </div>
                    <div className={styles.pieChart}>
                        <img src={down} className={styles.pieInfo} />
                        <PieChart
                            data={[
                                { title: 'Sales', value: 50, color: "#FF513A"},
                                { title: 'Not Sales', value: 50, color: "#FFE8D7"},
                            ]}
                            lineWidth={15}
                            startAngle={-90}
                            rounded={true}
                            animate={true}
                        />
                    </div>
                </div>
            </div>
            
            <div>
                <div className={styles.category}>
                    <div>{items.title}</div>

                    <div className={styles.favorTool}>
                        <input type="input" value={"Try ‘Miami beachhouse’"} height={20} className={styles.favorInput}/>
                        <img src={'/images/search.png'}  height={20}/>
                        
                    </div>
                </div>
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
        </div>
    );
}

export default MainContent;