import Create from '../component/Create';
import {connect} from 'react-redux';

export default connect(null,
    function(dispatch) {
        return {
            onSubmit(title, desc) {
                dispatch({type:'CREATE_PROCESS', title, desc});
            }
        }
    })(Create)