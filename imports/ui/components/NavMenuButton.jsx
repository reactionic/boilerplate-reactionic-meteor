import React from 'react';
import { IonButton } from 'reactionic';

export default function NavMenuButton(props, context) {
  return (
    <IonButton
      {...props}
      icon="ion-navicon-round"
      type="clear"
      onClick={() => { context.ionGetSnapper().toggle('left'); }}
      customClasses="button-stage"
    />
  );
}

NavMenuButton.contextTypes = {
  ionGetSnapper: React.PropTypes.func,
};
