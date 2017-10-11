import React from 'react';
import { connect } from 'react-redux';
import DeckForm from '../../modules/components/widgets/deck-form/deck-form';
import Page from '../../modules/components/widgets/page/page';

const EditDeckContainer = () => {
  return (
    <Page header={'Edit Deck'}>
      <DeckForm />
    </Page>
  );
};

export default connect(null, null)(EditDeckContainer);
