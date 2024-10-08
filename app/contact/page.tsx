import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">

                <Header />

                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <h1>Contact Us</h1>
                    <p>
                        You can contact us at 437 XXX XXX 
                    </p>
                </div>

            </div>
        </div>
    </>
}