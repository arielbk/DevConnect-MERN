import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const textFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

textFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

textFieldGroup.defaultProps = {
  type: 'text'
}

export default textFieldGroup;