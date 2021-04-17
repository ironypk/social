import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {addDialogMessage, changeNewDialogMessage, DialogsPageType} from '../../redux/reducers/dialogsPageReducer';
import {AppStateType} from '../../redux';


type mapStatePropsType = DialogsPageType

type mapDispatchToProps = {
    changeNewDialogMessage: (text: string) => void,
    addDialogMessage: (id: string) => void
}


export type DialogsPropsType = mapStatePropsType & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        my_ID: state.dialogsPage.my_ID,
        title: state.dialogsPage.title
    }
}


export const DialogsContainer = connect(mapStateToProps, {changeNewDialogMessage, addDialogMessage})(Dialogs)