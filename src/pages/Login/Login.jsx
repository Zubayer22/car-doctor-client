import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;

                console.log(user);

                navigate(from, {replace: true});

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <p>New to Cars Doctor <Link to="/signup">Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;