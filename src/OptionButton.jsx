import React from "react";
import PropTypes from "prop-types";
import './styles/OptionButton.css'

class OptionButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClick, option, optionLabel } = this.props;

        return (
            <div>
                <button className="optionButton" >
                    <div className="optionLabelDiv" >
                        <svg className="optionSvg" >
                            <g>
                                <rect className="purpleRectangle" />
                                <text x="50%" y="50%" alignmentBaseline="middle" className="optionLabelText" >
                                    {optionLabel}
                                </text>
                            </g>
                        </svg>
                    </div>
                    <div className="optionText" >
                        <text>
                            {option}
                        </text>
                    </div>
                </button>
            </div >
        );
    }
}

OptionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    option: PropTypes.string.isRequired,
    optionLabel: PropTypes.string.isRequired
};

export default OptionButton;
