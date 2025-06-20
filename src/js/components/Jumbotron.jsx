import React from "react";

const Jumbotron = () => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3"> 
                <div className="container-fluid py-5"> 
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1> 
                    <p className="col-md-8 fs-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo maxime provident quasi, ducimus blanditiis illo ipsum, itaque recusandae assumenda tenetur deleniti dicta saepe odio hic quisquam obcaecati, at eaque?
                    </p> 
                    <button className="btn btn-primary btn-lg " type="button">Call to Action!</button> 
                </div> 
            </div>
        </div>
    );
};

export default Jumbotron;