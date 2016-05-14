import React from 'react';

// copied from https://github.com/reactionic/reactionic-kitchensink/blob/master/app/client/imports/components/utils/helpers.jsx

export default function AbsoluteMiddle(props) {
  return (
    <div className="stretch">
      <div className="row row-center stretch">
        <div className="col text-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}

AbsoluteMiddle.propTypes = {
  children: React.PropTypes.node,
};
