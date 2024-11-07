import { 
    IconMapPin, 
    IconSearch,
    IconBrandMcdonalds,
    IconStarFilled,
    IconMoped,
    IconPizzaFilled } 
from '@tabler/icons-react';
import PromoCard from '../components/PromoCard';
import FoodCat from '../components/FoodCat';

export default function Food() {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row gap-3">
                <button class="btn text-center" style={{background: '#e3fcea'}}><IconMapPin className='text-success' stroke={2} /></button>
                <div className='d-flex flex-column w-25'>
                    <p className='mb-0' style={{fontSize: '0.75rem'}}>Deliver to:</p>
                    <b>Current Location</b>
                </div>
                <div className='w-100'>
                    <div class="input-group">
                        <span class="input-group-text bg-white" id="basic-addon1"><IconSearch className='text-success' stroke={1.5}/></span>
                        <input type="text" class="form-control border-start-0" placeholder="Search"></input>
                    </div>
                </div>
            </div>
            <PromoCard />
            <FoodCat />
            <div class="btn btn-light flex-grow-1 card my-3" onClick={() => {
                window.location.href = '/mcdonald';
            }}>
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <IconBrandMcdonalds className='text-warning' style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>McDonald's</b></h5>
                            <div className='d-flex flex-row py-auto'>
                                <IconStarFilled className='me-1 text-warning' style={{width: '15px', height: '15px'}} />
                                <p className='mb-0 text-start' style={{fontSize: '0.75rem'}}>4.8 (1000) | Fast Food</p>
                            </div>
                            <div className='d-flex flex-row'>
                                <div style={{background: '#fccace'}} className='card d-flex flex-row border-danger'>
                                    <IconMoped stroke={2} className='text-danger my-auto ms-2 me-1' style={{width: '0.8rem', height: '0.8rem'}} />
                                    <b className='mb-0 text-white me-2 bg-danger' style={{fontSize: '0.75rem'}}>&nbsp;฿0&nbsp;</b>
                                </div>
                                <p className='mb-0 ms-1 text-start' style={{fontSize: '0.75rem'}}>| 500 m (10 min)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn btn-light flex-grow-1 card my-3">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <IconPizzaFilled style={{width: '64px', height: '64px', color: '#198754'}} />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>The Pizza Company</b></h5>
                            <div className='d-flex flex-row py-auto'>
                                <IconStarFilled className='me-1 text-warning' style={{width: '15px', height: '15px'}} />
                                <p className='mb-0 text-start' style={{fontSize: '0.75rem'}}>4.7 (777) | Fast Food</p>
                            </div>
                            <div className='d-flex flex-row'>
                                <div style={{background: '#fccace'}} className='card d-flex flex-row border-danger'>
                                    <IconMoped stroke={2} className='text-danger my-auto ms-2 me-1' style={{width: '0.8rem', height: '0.8rem'}} />
                                    <b className='mb-0 text-white me-2 bg-danger' style={{fontSize: '0.75rem'}}>&nbsp;฿2&nbsp;</b>
                                </div>
                                <p className='mb-0 ms-1 text-start' style={{fontSize: '0.75rem'}}>| 1.2 km (20 min)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}