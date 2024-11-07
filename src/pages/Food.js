import { IconMapPin, IconSearch, IconRosetteDiscountFilled, IconChevronRight, IconFlame, IconBrandAppgallery } from '@tabler/icons-react';

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
            <div className="d-flex flex-row justify-content-center gap-3 mt-3">
                <div class="btn card bg-success border-0">
                    <div class="card-body d-flex flex-row">
                        <IconRosetteDiscountFilled className='text-white' style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-2 my-auto'>
                            <h3 className='mb-0 text-start'>Free Delivery*</h3>
                            <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>Every Restaurant</b>
                        </div>
                        <IconChevronRight stroke={3} className='text-white ms-3 my-auto' />
                    </div>
                </div>
                <div class="btn card bg-warning border-0">
                    <div class="card-body d-flex flex-row">
                        <IconFlame className='text-danger' stroke={2} style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-2 my-auto text-danger'>
                            <h3 className='mb-0 text-start'>Hot Deals</h3>
                            <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>13.13 Flash Sale</b>
                        </div>
                        <IconChevronRight stroke={3} className='text-danger ms-3 my-auto' />
                    </div>
                </div>
                <div class="btn card bg-info border-0">
                    <div class="card-body d-flex flex-row">
                        <IconBrandAppgallery className='text-white' stroke={2} style={{width: '64px', height: '64px'}} />
                        <div className='d-flex flex-column ms-2 my-auto text-white'>
                            <h3 className='mb-0 text-start'>Special Restaurant</h3>
                            <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>LANDMINE ONLY</b>
                        </div>
                        <IconChevronRight stroke={3} className='text-white ms-3 my-auto' />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row gap-3 mt-3">
                <button class="btn btn-outline-dark">Breakfast</button>
                <button class="btn btn-outline-dark">Lunch</button>
                <button class="btn btn-outline-dark">Dinner</button>
            </div>
        </div>
    );
}