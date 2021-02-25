import Update from '../component/Update';
import {connect} from 'react-redux';

export default connect(function(state) {
    let title, desc, id;
    state.contents.some((v, i) => {
        if(v.id === state.selected_content_id) {
            title = v.title;
            desc = v.desc;
            id = v.id
            return true;
        }
    });
    return {
        title,
        desc,
        id
    }
},
function(dispatch) {
    return {
        onSubmit(title, desc, id) { dispatch({type: 'UPDATE_CONTENT', id, title, desc}); }
    }
})(Update);