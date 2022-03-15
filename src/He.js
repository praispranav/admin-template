import React from "react";
import "./midcontainer.css";
import omkar from "./image/omkar1.jpg";

export default function He() {
  return (
    <div className="container d-flex">
      {/* left side container */}
      <div>
        <div className="bg-primary w-200 bd-10  mar-50">
          <h1 className="fs-20 p-3 text-light ">Web development</h1>
        </div>

        <div className="bg-myblue w-160 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3  h-blue">Data science</h1>
        </div>
        <div className="bg-myblue w-220 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3  h-blue">Mobile development</h1>
        </div>
        <div className="bg-myblue w-160 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3  h-blue">Programing</h1>
        </div>
        <div className="bg-myblue w-220 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3 t h-blue">Game Development</h1>
        </div>
        <div className="bg-myblue w-200 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3  h-blue">Software Testing</h1>
        </div>
        <div className="bg-myblue w-230 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3  h-blue">Software Engineering</h1>
        </div>
        <div className="bg-myblue w-200 bd-10 mar-10 hovere">
          <h1 className="fs-20 p-3  h-blue">Network Security</h1>
        </div>

        <div className="select-button w-220">
          <p className="select-c"> Select your courses</p>
        </div>
      </div>

      {/* mid container */}
      <div className="mar-50 mid-contain">
        <div>
          <h1 className="font-800">Popular Course</h1>
        </div>

        <div className="d-flex mt-5 card-conatiner">
          <div className="card">
            <div className="image"></div>
            
<div className="button">
  Best seller
  
</div>
<div className="bg-light icon-d">
<i class="bi icon bi-bookmark"></i>
</div>
<div className="fullstack"><p className="full-p">Fullstack web developer courses from scratch</p>

<p className="albert">By Albert Flores</p>
<p className="dollar">$12.50</p>
</div>
          </div>
          <div className="card">
          <div className="image"></div>
                      
<div className="button">
  Best seller
  
</div>
          <div className="bg-light icon-d">
<i class="bi icon icon2 bi-bookmark"></i>
</div>
          </div>
          <div className="card">
          <div className="image"></div>
          <div className="button2">
  sale !
</div>
<div className="bg-light icon-d">
<i class="bi icon bi-bookmark"></i>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
