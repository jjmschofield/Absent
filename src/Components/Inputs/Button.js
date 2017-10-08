import React, {Component} from 'react';


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

}