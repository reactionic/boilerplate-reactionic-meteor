import React from 'react';
import { IonContent } from 'reactionic';
import LoadingDiv from './LoadingDiv.jsx';

export default function Content(props) {
  return (
    <IonContent {...props}>
      <LoadingDiv {...props}>
        {props.children}
      </LoadingDiv>
    </IonContent>
  );
}

Content.propTypes = {
  children: React.PropTypes.node,
};
