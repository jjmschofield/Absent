import { connect } from 'react-redux';
import {App} from './App';
import { setVisibleDates } from './Store/Actions/TeamCalendar';
import { fetchAbsences } from './Store/Actions/Absences';
import { fetchUsers } from './Store/Actions/Users';

const mapStateToProps = (state) => {
    return {
        absences: state.absences,
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAbsences: () =>{
            dispatch(fetchAbsences());
        },
        fetchUsers: () =>{
            dispatch(fetchUsers());
        },
        setVisibleDates: (dates) =>{
            dispatch(setVisibleDates(dates));
        }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer

