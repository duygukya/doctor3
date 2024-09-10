import cerrah from "../assets/cerrah.png"
import "./mainpageuser.css"
function UpperSection({ image, name }) {
    console.log(name);
    return (
        <div className="row m-0 classedd">
            <img className="col-6 p-0 ddddd" style={{ height: "350px" }} src={image} alt="" />
            <div className="col-6 p-0 bgranded d-flex align-items-center">
                <span className="mx-5 fs-2 fw-bold" style={{color: "white"}}>
                    {name}

                </span>
            </div>
        </div>
    );
}

export default UpperSection;