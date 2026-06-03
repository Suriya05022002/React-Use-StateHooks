import { useState } from "react";

// import PropTypes from 'prop-types'

function Course(props) {

    const [purchased, setPurchased] = useState(false);

    const [discount, setDiscount] = useState(props.price);

    function Buycourse(amt) {

        console.log(
            props.name,
            "purchased with",
            amt,
            "% discount"
        );

        setPurchased(true);

        setDiscount(discount - amt);

        console.log(purchased);
    }

    return (

        <div className="card">

            <img src={props.image} />

            <h2>{props.name}</h2>

            <h2>{props.price}</h2>

            <h2>{props.rating}</h2>

            <p>{discount}</p>

            <button onClick={() => Buycourse(20)}>
                Discount
            </button>

            <p>
                {purchased ? "Purchased" : "Not Purchased"}
            </p>

        </div>
    );
}

export default Course;