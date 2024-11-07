import { IconMapPinFilled } from '@tabler/icons-react';

export default function Food() {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row gap-2">
                <input class="form-control" type="text" placeholder="Select Your Location"></input>
                <button class="btn btn-danger"><IconMapPinFilled /></button>
            </div>
        </div>
    );
}