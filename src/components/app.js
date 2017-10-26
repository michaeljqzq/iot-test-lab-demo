import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Localization from '../localization/localization';
import { traceEvent } from '../lib/telemetry.js';
// import 'bootstrap/dist/css/bootstrap.css';
import '../common.scss';

import Banner from '../containers/banner';
import HelpOverlay from '../containers/helpOverlay';
import ControlBar from '../containers/controlBar';
import MyConsole from '../containers/console';
import Editor from '../containers/editor';
import Project from '../containers/project';
import Board from '../containers/board';

import { tracePageView, tracePageViewAI } from '../lib/telemetry.js';
var terminal1 = `- checking pre-conditions of task: node.js version
  V node.js version: v7.6.0
  - checking pre-conditions of task: generate platform.local.txt
  V generate platform.local.txt: platform.local.txt already exists
  - checking pre-conditions of task: config azure connection string
Opening COM5.
SerialOutput help
SerialOutput Configuration console:
SerialOutput - help: Help document.
SerialOutput - version: System version.
SerialOutput - exit: Exit and reboot.
SerialOutput - scan: Scan Wi-Fi AP.
SerialOutput - set_wifissid: Set Wi-Fi SSID.
SerialOutput - set_wifipwd: Set Wi-Fi password.
SerialOutput - set_az_iothub: Set the connection string of Microsoft Azure IoT Hub.
  V config azure connection string: done
  - checking pre-conditions of task: Check Arduino IDE Version and Location
  V Check Arduino IDE Version and Location: 1.8.1 @ C:\Program Files (x86)\Arduino
  - checking pre-conditions of task: Check Arduino Board
  V Check Arduino Board: MXCHIP_AZ3166 as MXCHIP AZ3166
  - checking pre-conditions of task: Build & Upload Sketch
C:\Program Files (x86)\Arduino\arduino_debug.exe --upload --board AZ3166:stm32f4:MXCHIP_AZ3166 --preferences-file C:\Users\v-zhq\Documents\Arduino\generat
ed_examples\GetStarted_8\.build/pref.txt --pref compiler.warning_level=none --pref build.path=C:\Users\v-zhq\Documents\Arduino\generated_examples\GetStart
ed_8\.build C:\Users\v-zhq\Documents\Arduino\generated_examples\GetStarted_8\GetStarted.ino
Loading configuration...
Initializing packages...
Invalid version found: 5_4-2016q3
Preparing boards...
Verifying...
c:/users/v-zhq/appdata/local/arduino15/packages/az3166/tools/arm-none-eabi-gcc/5_4-2016q3/bin/../lib/gcc/arm-none-eabi/5.4.1/../../../../arm-none-eabi/bin
/ld.exe: warning: changing start of section .data by 4 bytes
c:/users/v-zhq/appdata/local/arduino15/packages/az3166/tools/arm-none-eabi-gcc/5_4-2016q3/bin/../lib/gcc/arm-none-eabi/5.4.1/../../../../arm-none-eabi/bin
/ld.exe: warning: changing start of section .data by 4 bytes
c:/users/v-zhq/appdata/local/arduino15/packages/az3166/tools/arm-none-eabi-gcc/5_4-2016q3/bin/../lib/gcc/arm-none-eabi/5.4.1/../../../../arm-none-eabi/bin
/ld.exe: warning: changing start of section .data by 4 bytes
Sketch uses 475088 bytes (45%) of program storage space. Maximum is 1048576 bytes.
Global variables use 55072 bytes (21%) of dynamic memory, leaving 207072 bytes for local variables. Maximum is 262144 bytes.
Uploading...
GNU ARM Eclipse 32-bits Open On-Chip Debugger 0.10.0-00114-g8419536 (2017-04-18-22:14)
Licensed under GNU GPL v2
For bug reports, read
        http://openocd.org/doc/doxygen/bugs.html
hla_swd
Info : The selected transport took over low-level target control. The results might differ compared to plain JTAG/SWD
adapter speed: 2000 kHz
adapter_nsrst_delay: 100
none separate
Info : Unable to match requested speed 2000 kHz, using 1800 kHz
Info : Unable to match requested speed 2000 kHz, using 1800 kHz
Info : clock speed 1800 kHz
Error: libusb_open() failed with LIBUSB_ERROR_NOT_SUPPORTED
Info : STLINK v2 JTAG v28 API v2 SWIM v17 VID 0x0483 PID 0x374B
Info : using stlink api v2
Info : Target voltage: 3.281928
Info : stm32f4x.cpu: hardware has 6 breakpoints, 4 watchpoints
Info : Unable to match requested speed 2000 kHz, using 1800 kHz
Info : Unable to match requested speed 2000 kHz, using 1800 kHz
adapter speed: 1800 kHz
target halted due to debug-request, current mode: Thread
xPSR: 0x01000000 pc: 0x08000034 msp: 0x2000e784
Info : Unable to match requested speed 8000 kHz, using 4000 kHz
Info : Unable to match requested speed 8000 kHz, using 4000 kHz
adapter speed: 4000 kHz
shutdown command invoked
arduino_debug.exe exited.
  V Build & Upload Sketch: success`;
class App extends Component {
    constructor(props) {
        super(props);
        tracePageView();
        tracePageViewAI();
    }

    reportPosition = () => {
        let { top, left, right, bottom, width, height } = this.refs.rightContainer.getBoundingClientRect();
        this.props.setComponentSize({
            top, left, right, bottom, width, height,
            dotX: -100,
            dotY: -100,
        });
    }

    componentDidMount() {
        if (!localStorage.getItem('disable-help')) {
            localStorage.setItem('disable-help', '1');
            this.props.openGuide();
        }
        this.reportPosition();
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.onResize);
    }

    onResize = () => {
        this.reportPosition();
    }

    render() {
      if(window.location.href.indexOf("/detail/1")!== -1) {
        var mj = {
            version: "1.0.44",
            time: "a day ago in 4 min 58 sec",
            result : "fail",
            detail : "Azure Function connect failed",
            source : "Github",
            author : "Zhiqing Qiu",
            project : "devkit-shakeshake",
            to: "/detail/1",
          terminal: terminal1,
        };
      }else if(window.location.href.indexOf("/detail/2")!== -1) {
        var mj = {
          version: "1.0.45",
          time: "just now",
          result : "success",
          detail : "",
          source : "Github",
          author : "Zhiqing Qiu",
          project : "devkit-shakeshake",
          terminal: terminal1,
        };
      }
        return (
            <div className='main'>
                <Banner />
                <div className='main-container'>
                    {/*<Project />*/}
                    <table className="mj-table" style={{width:"auto"}}>
                    <tr>
                        <th>MetaKey</th>
                        <th>MetaValue</th>
                    </tr>
                    <tr>
                        <td>Build version</td>
                        <td>{mj.version}</td>
                    </tr>
                    <tr>
                        <td>Timestamp</td>
                        <td>{mj.time}</td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>{mj.result}</td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>{mj.detail}</td>
                    </tr>
                    <tr>
                        <td>Source</td>
                        <td>{mj.source}</td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td>{mj.author}</td>
                    </tr>
                    <tr>
                        <td>Project</td>
                        <td>{mj.project}</td>
                    </tr>
                </table>
                    <div className='center-container'>
                        {/*<ControlBar />
                        <Editor />*/}
                        <div className="mj-terminal">
                        {mj.terminal}
                          </div>
                    </div>
                    <div ref="rightContainer" className={`right-container ${this.props.highlight && 'highlight'}`} >
                        <Board />
                        <div className="get-a-kit">
                            <a onClick={traceEvent.bind(this, 'buy-clicked')} className="no-underline" target="_blank" href={Localization.getLocalizedString().buyLink} >{Localization.getLocalizedString().getAKitButton}</a>
                        </div>
                        <MyConsole />
                    </div>
                </div>
                <HelpOverlay />
            </div>
        );
    }
}

export default App;