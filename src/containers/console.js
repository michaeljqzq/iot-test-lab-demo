import { connect } from 'react-redux';
import MyConsole from '../components/console';

const mapStateToProps = (state) => ({
    message: state.main.get('consoleMessage'),
});

export default connect(mapStateToProps, null)(MyConsole)
