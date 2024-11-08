import { 
    IconChevronLeft,
    IconChevronRight,
    IconHeart,
    IconHeartFilled,
    IconStarFilled,
    IconMoped
 } from '@tabler/icons-react';
import { useState } from 'react';

export default function McDonaldBanner() {

    const [fav, setFav] = useState(false);

    return (
        <div className="d-flex flex-column">
            <img 
                src='/pics/McDonalds-Banner.jpeg'
                className='position-absolute top-0 z-n1'
                style={{ width: '100vw', height: '40vh', left: '0' , objectFit: 'cover' }}
                alt='McDonalds' />
            <div className="d-flex flex-row justify-content-between gap-3">
                <button class="btn text-center" style={{background: 'white'}} onClick={() => {
                    window.location.href = '/';
                }}>
                    <IconChevronLeft className='text-success' stroke={2} />
                </button>
                <button class="btn border-0 text-center bg-white rounded-5" onClick={() => {
                    setFav(!fav);
                }}>
                    { !fav ? <IconHeart className='text-danger' stroke={2} /> : <IconHeartFilled className='text-danger' /> }
                </button>
            </div>
            <div className='btn border-0 d-flex flex-row justify-content-between' style={{ marginTop: '35vh'}}>
                <h1 className='mb-0'><b>McDonald's</b></h1>
                <IconChevronRight className='my-auto' stroke={2} />
            </div>
            <div className='d-flex flex-row py-auto ps-3'>
                <IconStarFilled className='me-1 text-warning' style={{width: '15px', height: '15px'}} />
                <p className='mb-0 text-start' style={{fontSize: '0.75rem'}}>4.8 (<u>1000 ratings</u>) · 
                <IconMoped stroke={2} className='ms-2 me-1' style={{width: '0.85rem', height: '0.85rem'}} />&nbsp;฿0&nbsp; <s className='mb-0 text-secondary' style={{fontSize: '0.75rem'}}>฿5</s> &nbsp;·
                 500 m (10 min)</p>
            </div>
        </div>
    );
}