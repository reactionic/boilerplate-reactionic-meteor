import React from 'react';

const AbsoluteMiddle = (props) => (
  <div className="stretch">
    <div className="row row-center stretch">
      <div className="col text-center">
        {props.children}
      </div>
    </div>
  </div>
);

AbsoluteMiddle.propTypes = {
  children: React.PropTypes.element,
};

export default AbsoluteMiddle;
