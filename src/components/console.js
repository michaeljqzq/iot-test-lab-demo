import React, { Component } from 'react';
import Console from 'react-console-component';
import 'react-console-component/main.css';
import Localization from '../localization/localization';
var console1 = `Initializing Wifi...
Connecting to IoT Hub
Successfully connected to IoT Hub.

Shake shake!
Successfully finished shake action.
Sending message to IoT Hub.
IoT Hub responded with OK.
Calling Azure Function.

[Error] Timeout receiving from Azure Function`;

 var console2 = `Initializing Wifi...
Connecting to IoT Hub
Successfully connected to IoT Hub.

Shake shake!
Successfully finished shake action.
Sending message to IoT Hub.
IoT Hub responded with OK.
Calling Azure Function.

@Nazzik:
RT @Yla1978: #dimash #DQ #dimashkudaibergenov #dears #kudaibergenovdimash #thesingerdimash #music #talent #voice #song #bestsinger https://…
 `;

class MyConsole extends Component {
    constructor(props) {
        super(props);
         if(window.location.href.indexOf("/detail/1")!== -1) {
        var mj = console1;
      }else if(window.location.href.indexOf("/detail/2")!== -1) {
var mj = console2;
      }
        this.state = {
            text: mj,
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
