import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1612111778/henriquesilva.dev/kardec_quiz_tbns9x.gif" alt="this slowpoke moves"  width='250' />

    
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
