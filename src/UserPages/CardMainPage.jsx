import "./mainpageuser.css"

function Card({ details }) {



    return (
        <div style={{ width: "25%" }} className="mx-5 rrrr">
            <img className="cardd" style={{ width: "23rem" }} src={details.image} alt="" />
            <div className="aaaaaaa mx-5">
                <span className="fw-bold" style={{color: "#FFB10D"}}>

                    {details.name}
                </span>
            </div>
        </div>
    );
}

export default Card;