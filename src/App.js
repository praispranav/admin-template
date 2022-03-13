import React from "react";
import img1 from "./image/banner.jpg";
import img2 from "./image/boy.jpg"


import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="d-flex">
          <div className="d-flex">
            <img className="my-photo mt-3" src={img1} />
            <p className="mt-3 p-2 silicon">Silicon</p>
            <p className="ps-5 mt-4 pt-1 mytxt">Landing</p>
            <p className="ps-5 mt-4 pt-1 mytxt1">Page</p>
            <p className="ps-5 mt-4 pt-1 mytxt1">Account</p>
            <p className="ps-5 mt-4 pt-1 mytxt1">Ui kit</p>
            <p className="ps-5 mt-4 pt-1 mytxt1">Docs</p>
          </div>
          <div className="ps-5 light-d d-flex ">
            <p className="ps-5 mt-4 pt-1 mytxt1 text-dark mr-2">Light</p>
            <div className="ps-4">
              <div class="form-check form-switch mt-4 pt-1 ml-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckChecked"
                ></label>
              </div>
            </div>
            <p className="ps-2 mt-4 pt-1  text-secondary">Dark</p>
            <div className="mt-3 ps-3">
              <button class="btn btn-primary" type="submit">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-c d-flex">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="welcome "> Welcome !</h1>
              <div className="d-flex">
                <h1 className="head">Learn </h1>
                <h1 className="text-primary ps-3 head">IT Online</h1>
              </div>
              <h1 className="head">with No Limits</h1>
              <p className="para">
                Enjoy our great selection of IT courses. Choose from more than{" "}
                <br></br> 25K online video courses and become an IT expert now!
              </p>
              <div class="input-group d-block d-sm-flex input-group-lg me-3 aline-item-center input-d">
                <div className="d-flex">
                  <input
                    type="text"
                    class="form-control w-50"
                    placeholder="Search courses..."
                  />
                  <select class="form-select w-50">
                    <option value="" selected="" disabled="">
                      Categories
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                    <option value="Programming">Programming</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Software Testing">Software Testing</option>
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="Network &amp; Security">
                      Network &amp; Security
                    </option>
                  </select>
                  <div className="omk bg-primary">
                    <div>
                      <i class="bi sear bi-search"></i>
                    </div>
                  </div>
                </div>
              </div>
                    <div>
                      <h1>hii</h1>
                    </div>
            </div>
            <div className="col-6 position-relative">



              <div className="circle bg-primary "></div>



              <div>
                <img src={img1} className="girl"/>
              </div>
              <img src={img2} className="girl1"/>
              <div className="d-flex">

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
