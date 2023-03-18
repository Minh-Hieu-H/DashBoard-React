import PropTypes from 'prop-types'
import './button.css'

const Button = props => {
  return (
    <button className="btnDashoard" onClick={props.onClick ? () => props.onClick() : null}>
        {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button