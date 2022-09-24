import React from 'react';
import PropTypes from 'prop-types';

function PageHeader({ header, headerStyle }) {
  return <h1 className={`header ${headerStyle}`}>{header}</h1>;
}

PageHeader.propTypes = {
  header: PropTypes.string.isRequired,
  headerStyle: PropTypes.string,
};

PageHeader.defaultProps = {
  headerStyle: null
}

export default PageHeader;
