import React from 'react';
import './NewPlace.css';
import Input from '../../shared/components/FormElements/Input';

function NewPlace() {
  return (
    <form className="place-form">
      <Input type="text" label="Title" element="input" />
    </form>
  );
}

export default NewPlace;
