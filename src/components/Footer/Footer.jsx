import React from "react"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit"

export default function Footer() {
  return (
    <MDBFooter className="text-center text-white bg-dark">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="m-1 btn btn-primary btn-floating"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            className="m-1 btn btn-primary btn-floating"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/Daniel02353300"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </a>

          <a
            className="m-1 btn btn-primary btn-floating"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </a>
          <a
            className="m-1 btn btn-primary btn-floating"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </a>

          <a
            className="m-1 btn btn-primary btn-floating"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/linfeng-chen-a73105244/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>

          <a
            className="m-1 btn btn-primary btn-floating"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/danielchen2003/Yummy-Yummy"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </a>
        </section>
      </div>

      <div
        className="p-3 text-center"
        style={{ backgroundColor: "rgb(240,67,40)" }}
      >
        <a
          className="text-white"
          href="https://github.com/danielchen2003/Yummy-Yummy"
        >
          © 2022 August Niu Niu Made by Linfeng Chen in Per Scholars
        </a>
      </div>
    </MDBFooter>
  )
}
