import { 
    IconEggFried,
    IconSalad,
    IconCup,
    IconMeat,
    IconIceCream2,
    IconBurger,
    IconCarrot,
    IconCookie } 
from '@tabler/icons-react';

export default function FoodCat() {
    return (
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
    )
}