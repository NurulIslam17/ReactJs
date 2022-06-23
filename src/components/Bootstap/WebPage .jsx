import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const WebPage = () => {
  return (
    <div>
      <h1 className="text-center text-primary my-5">Lorem Image With Card(Bootstrap)</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="Image_Not_Found" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://picsum.photos/200/300" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/302" className="card-img-top" alt="Image_Not_Found" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://picsum.photos/200/302" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/303" className="card-img-top" alt="Image_Not_Found" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://picsum.photos/200/303" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
