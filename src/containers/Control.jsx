import Control from '../component/Control';
import {connect} from 'react-redux';

export default connect(null, function(dispatch) {
    return {
        onClick(mode) {
            dispatch({type:mode});
        }
    }
})(Control);