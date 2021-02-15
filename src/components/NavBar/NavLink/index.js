import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    '&.active': {
      color: palette.primary.active,
    },
  },
}));

const NavLink = ({ isActive, className, ...rest }) => {  
  const classes = useStyles();
  const classNames = [classes.root];

  if (isActive) {
    classNames.push('active');
  }

  if (className) {
    classNames.push(className);
  }

  return <Button {...rest} component={Link} className={classNames.join(' ')} />;
};

NavLink.defaultProps = {
  component: Link,
};

NavLink.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.string,
  childern: PropTypes.any,
};

export default NavLink;
