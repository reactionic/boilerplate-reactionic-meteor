import React from 'react';

export default () => (
  <div className="stretch">
    <div className="row row-center stretch">
      <div className="col text-center">
        {this.props.children}
      </div>
    </div>
  </div>
);
