import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute bottom-[-50px] right-0 border-8 border-white" />
                </div>

                <div className="lg:w-1/2">
                    <h3 className="text-xl font-bold text-red-600">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /><br />the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;