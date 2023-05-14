import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
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
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                        </form>
                        <p>Already Have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;