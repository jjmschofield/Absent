import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Button extends Component {
    render() {
        return (
            <button className={this.getClassNames()}
                    onClick={() => this.props.clickHandler()}
                    type="button"
            >
                {this.props.children}
            </button>
        )
    }

    getClassNames(){
        let classNames = [];
        classNames.push("mdl-button");
        classNames.push("mdl-js-button");

        if(this.props.raised){
            classNames.push("mdl-button--raised");
        }

        if(this.props.colored){
            classNames.push("mdl-button--colored");
        }

        if(this.props.accent){
            classNames.push("mdl-button--accent");
        }

        if(this.props.ripple){
            classNames.push("mdl-js-ripple-effect");
        }

        if(this.props.fab){
            classNames.push("mdl-button--fab");
        }

        if(this.props.miniFab){
            classNames.push("mdl-button--fab mdl-button--mini-fab")
        }

        return classNames.join(" ");

    }


    componentDidMount(){
        if(window.componentHandler){ //TODO - there is an issue in execution order which makes this method not available on first render
            window.componentHandler.upgradeElement(ReactDOM.findDOMNode(this)); //MDL needs to be instructed to upgrade the component if it isn't visible in the first render
        }
    }

}