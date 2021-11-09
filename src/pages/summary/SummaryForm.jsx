import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const checkBoxLabel = (
  <span>
    Accept <a href="http://localhost:3000">Terms and Conditions</a>
  </span>
);
const SummaryForm = () => {
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCheckbox = () => {
    setTermsChecked((prev) => !prev);
  };

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsChecked}
          onChange={handleCheckbox}
          label={checkBoxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!termsChecked}>
        Confirm
      </Button>
    </Form>
  );
};

export default SummaryForm;
