import React, { Component } from 'react';
import Console from 'react-console-component';
import 'react-console-component/main.css';
import Localization from '../localization/localization';

class MyConsole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: Localization.getLocalizedString().consoleWelcomeMessage + "\n",
        }
    }
    componentDidUpdate(prevProps, prevState) {
        this.writeLine(this.props.message.substring(prevProps.message.length));
        this.writeLine(this.props.error);
    }

    writeLine = (msg) => {
        if (!msg) { return; }
        this.setState((prev) => {
            return {
                text: prev.text + msg + "\n",
            }
        })
        this.refs.text.scrollTop = this.refs.text.scrollHeight;
    }

    render() {
        return (
            <div className={'showConsole'}>
                <textarea ref="text" readOnly value={this.state.text} spellCheck={false} className='react-console-container' >
                </textarea>
            </div>
        );
    }
}

export default MyConsole;
