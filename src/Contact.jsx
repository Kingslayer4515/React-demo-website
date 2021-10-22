
import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";

function Contact() {

    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);

    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                       
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input class="form-control" id="exampleFormControlInput1" 
                            type ="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                            placeholder="Name"/>
                            </div>
                            
                            
                            
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input class="form-control" id="exampleFormControlInput1" 
                            type ="number"
                            name="phone"
                            value={inputs.phone || ""}
                            onChange={handleChange}
                            placeholder="Phone Number"/>
                            </div>

                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">E-mail</label>
                            <input class="form-control" id="exampleFormControlInput1" 
                            type ="mail"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            placeholder="E-mail"/>
                            </div>

                            
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" 
                            type ="text"
                            name="text"
                            value={inputs.text || ""}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Enter text here">
                            </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                            
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}
ReactDOM.render(<Contact />, document.getElementById('root'));



export default Contact;