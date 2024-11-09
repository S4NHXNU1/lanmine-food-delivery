import McDonaldBanner from "../components/McDonaldBanner";

export default function McDonald() {
    return (
        <div className="d-flex flex-column">
            <McDonaldBanner />
            <div class="btn btn-light flex-grow-1 card my-3">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <img 
                            src='/pics/BigMac.jpeg'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>Big Mac</b></h5>
                            <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A double chease & patty burger</p>
                            <b className='mb-0 text-start mt-4'>฿139</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn btn-light flex-grow-1 card my-3">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <img 
                            src='/pics/McFriedChicken.png'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>Mc Fried Chicken</b></h5>
                            <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A very chrispy & spicy fried chicken</p>
                            <b className='mb-0 text-start mt-4'>฿59</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn btn-light flex-grow-1 card my-3">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <img 
                            src='/pics/McFriedChickenSet.png'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>Mc Fried Chicken Double Set</b></h5>
                            <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A very chrispy & spicy fried chicken set for two people</p>
                            <b className='mb-0 text-start mt-4'>฿129</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}