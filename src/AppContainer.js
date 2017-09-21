import { connect } from 'react-redux';
import {App} from './App';
import { fetchAbsences } from './Store/Actions/Absences';

const mapStateToProps = (state) => {
    return {
        absences: state.absences
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAbsences: (callback) =>{
            dispatch(fetchAbsences(dispatch,callback));
        }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer

