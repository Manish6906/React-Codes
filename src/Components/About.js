import React, { useState } from "react";

export default function About(props) {
  const [Mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [enable, setEnable] = useState("Enable Dark mode");

  const btn = () => {
    if (Mode.color === "white") {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setEnable("Enable Dark mode");
    } else {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
      setEnable("Enable light mode");
    }
  };
  return (
    <>
      <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        About Us
      </h1>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item ">
                        <h2 className="accordion-header" id="headingOne ">
                        <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Mode}>
                            Accordion Item #1
                        </div>
                        </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show border border-warning" style={Mode} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className='accordion-body' style={Mode}>
                        <strong>This is the first item's accordion body.</strong> It is
                        shown by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control
                        the overall appearance, as well as the showing and hiding via
                        CSS transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that
                        just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit
                        overflow.
                    </div>
                    </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingTwo">
              <div className="accordion-button collapsed"  style={Mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </div>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse border border-warning" style={Mode} aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <div className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={Mode}>
                Accordion Item #3
              </div>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse border border-warning" style={Mode} aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={btn}
          className="btn btn-dark my-2"
          style={Mode}
        >
          {enable}
        </button>
      </div>
    </>
  );
}
