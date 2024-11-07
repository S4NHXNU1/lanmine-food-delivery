import { 
    IconMapPin, 
    IconSearch, 
    IconRosetteDiscountFilled, 
    IconChevronRight, 
    IconFlame, 
    IconBrandAppgallery,
    IconEggFried,
    IconSalad,
    IconCup,
    IconMeat,
    IconIceCream2,
    IconBurger,
    IconCarrot,
    IconCookie } 
from '@tabler/icons-react';

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
                                <b className='mb-0 text-start' style={{fontSize: '0.75rem'}}>LANDMINE ONLY</b>
                            </div>
                        </div>
                        <IconChevronRight stroke={3} className='text-white ms-3 my-auto' />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row gap-3 mt-3">
                <button class="btn flex-grow-1 btn-outline-dark"><IconEggFried stroke={1.5} className='me-2' />Breakfast</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconSalad stroke={1.5} className='me-2' />Lunch</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconMeat stroke={1.5} className='me-2' />Dinner</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconCup stroke={1.5} className='me-2' />Baverage</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconIceCream2 stroke={1.5} className='me-2' />Dessert</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconBurger stroke={1.5} className='me-2' />Fast Food</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconCarrot stroke={1.5} className='me-2' />Healthy</button>
                <button class="btn flex-grow-1 btn-outline-dark"><IconCookie stroke={1.5} className='me-2' />Snack</button>
            </div>
        </div>
    );
}