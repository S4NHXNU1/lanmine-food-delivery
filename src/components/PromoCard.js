import {  
    IconRosetteDiscountFilled, 
    IconChevronRight, 
    IconFlame, 
    IconBrandAppgallery } 
from '@tabler/icons-react';
export default function PromoCard() {
    return (
        <div className="d-flex flex-row justify-content-center gap-3 mt-3">
            <div class="btn flex-grow-1 card bg-success border-0">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <IconRosetteDiscountFilled className='text-white' style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-2 my-auto'>
                            <h3 className='mb-0 text-start'>Free Delivery*</h3>
                            <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>Every Restaurant</b>
                        </div>
                    </div>
                    <IconChevronRight stroke={3} className='text-white ms-3 my-auto' />
                </div>
            </div>
            <div class="btn flex-grow-1 card bg-warning border-0">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <IconFlame className='text-danger' stroke={2} style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-2 my-auto text-danger'>
                            <h3 className='mb-0 text-start'>Hot Deals</h3>
                            <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>13.13 Flash Sale</b>
                        </div>
                    </div>
                    <IconChevronRight stroke={3} className='text-danger ms-3 my-auto' />
                </div>
            </div>
            <div class="btn flex-grow-1 card bg-info border-0">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <IconBrandAppgallery className='text-white' stroke={2} style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-2 my-auto text-white'>
                            <h3 className='mb-0 text-start'>Special Restaurant</h3>
                            <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>LAN MINE ONLY</b>
                        </div>
                    </div>
                    <IconChevronRight stroke={3} className='text-white ms-3 my-auto' />
                </div>
            </div>
        </div>
    )
}