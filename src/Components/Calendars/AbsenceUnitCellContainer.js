import { connect } from 'react-redux';
import {AbsenceUnitCell} from './AbsenceUnitCell';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.currentUserId,
        editMode: state.interaction.absenceEditEnabled,
        selectedAbsenceEditType: state.interaction.absenceEditSelectedType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const AbsenceUnitCellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbsenceUnitCell);

export default AbsenceUnitCellContainer

