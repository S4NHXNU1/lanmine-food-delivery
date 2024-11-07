import { 
    IconChevronLeft,
    IconHeart,
    IconHeartFilled
 } from '@tabler/icons-react';
import { useState } from 'react';

export default function McDonald() {

    const [fav, setFav] = useState(false);

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between gap-3">
                <button class="btn text-center" style={{background: '#e3fcea'}} onClick={() => {
                    window.location.href = '/';
                }}>
                    <IconChevronLeft className='text-success' stroke={2} />
                </button>
                <button class="btn border-0 text-center rounded-5" onClick={() => {
                    setFav(!fav);
                }}>
                    { !fav ? <IconHeart className='text-danger' stroke={2} /> : <IconHeartFilled className='text-danger' /> }
                </button>
            </div>
        </div>
    );
}