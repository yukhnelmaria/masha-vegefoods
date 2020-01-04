import React from "react";
import {SubscribeForm} from "./SubscribeForm";

export const SubscribeBlock = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-6">
              <h2 style={{fontSize: '22px'}} className="mb-0">
                Subcribe to our News
              </h2>
              <span>Get sms updates about our latest shops and special offers</span>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>
)};
