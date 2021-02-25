import { connect } from 'react-redux';
import Nav from '../component/Nav';

export default connect(function(state) {
    return {data:state.contents}
},
function(dispatch) {
    return {
        onClick(id) {
            dispatch({type:'READ', id});
        }
    }
})(Nav);