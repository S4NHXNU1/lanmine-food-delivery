import { forwardRef } from "react";
import { GetCookie, SetCookie } from "../util/Cookie";

const LoginModal = forwardRef((props, ref) => {

    const { sendBack } = props;

    const UserLogin = () => {
        SetCookie("role", "user");
        sendBack();
    }

    const AdminLogin = () => {
        SetCookie("role", "admin");
        sendBack();
    }

    const RestaurantLogin = () => {
        SetCookie("role", "restaurant");
        sendBack();
    }
    
    return (
        <div ref={ref} class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body d-flex flex-column align-items-center">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Login</b></h1>
                        <button type="button" class="btn btn-success mt-2 border-0 w-100" data-bs-dismiss="modal" aria-label="Close" onClick={AdminLogin}><b>Login as Admin</b></button>
                        <button type="button" class="btn btn-success mt-2 border-0 w-100" data-bs-dismiss="modal" aria-label="Close" onClick={UserLogin}><b>Login as User</b></button>
                        <button type="button" class="btn btn-success mt-2 border-0 w-100" data-bs-dismiss="modal" aria-label="Close" onClick={RestaurantLogin}><b>Login as Restaurant</b></button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default LoginModal;