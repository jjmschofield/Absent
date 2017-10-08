import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class RadioButton extends Component {

    render() {
        return (
            <label className={this.props.id + " mdl-radio mdl-js-radio mdl-js-ripple-effect"}
                   htmlFor={this.props.id}
                   onClick={(event) => this.toggleHandler(event)}
            >
                <input
                    type="radio"
                    id={this.props.id}
                    className="mdl-radio__button"
                    name={this.props.name}
                    checked={this.props.checked}
                />
                <span className="mdl-radio__label">{this.props.label}</span>
            </label>
        )
    }

    toggleHandler(event){ //TODO - as MDL requires us to wrap the input in a label this will fire twice for each click
        this.props.toggleHandler(this.props.value);
    }

    componentDidUpdate(prevProps) { //We have to go a little too low in order to control MDL's dom manipulation - TODO - consider a 3rd party lib for MDL -> React
        if (this.props.disabled !== prevProps.disabled) {
            this.setEnabledState();
        }

        if (this.props.checked !== prevProps.checked) {
            this.setDisabledState();
        }
    }

    setEnabledState(){
        if(this.props.disabled) {
            ReactDOM.findDOMNode(this).MaterialRadio.disable();
        }
        else {
            ReactDOM.findDOMNode(this).MaterialRadio.enable();
        }
    }

    setDisabledState(){
        if(this.props.chekced) {
            ReactDOM.findDOMNode(this).MaterialRadio.check();
        }
        else {
            ReactDOM.findDOMNode(this).MaterialRadio.uncheck();
        }
    }
}

export default RadioButton;



