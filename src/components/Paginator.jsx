import React from "react";

export const Paginator = ({currentIndex, length, fullLength}) => {
  return (
    <div className="row mt-5">
      <div className="col text-center">
        <div className="block-27">
          <ul>
            {
              (currentIndex > length) && <li title="Prev"><a href="#">&lt;</a></li>
            }
            {
              [...new Array(length)].map((item, index) => (
                <li
                  key={index}
                  className={index+1 === currentIndex ? 'active' : null}
                >
                  <a href="#">{index + 1}</a>
                </li>
              ))
            }
            {
              (length < fullLength ) && <li title="Next"><a href="#">&gt;</a></li>
            }
          </ul>
        </div>
      </div>
    </div>
)};
