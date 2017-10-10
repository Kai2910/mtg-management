import React from 'react';
import { connect } from 'react-redux';
import NewDeckForm from './componenten/deck-form';

const EditDeckContainer = () => {
  return (
    <div>
      <NewDeckForm />
      <p>Hier entsteht was tolles.</p>
    </div>
  );
};

export default connect(null, null)(EditDeckContainer);
