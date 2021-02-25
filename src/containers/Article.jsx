import Article from '../component/Article';
import {connect} from 'react-redux';


export default connect(function(state) {
    let title, desc;
    
    if(state.mode === 'WELCOME') {
        title = state.welcome_content.title;
        desc = state.welcome_content.desc;
    } else {
        state.contents.some((v) => {
            if(v.id === state.selected_content_id) {
                title = v.title;
                desc = v.desc;
                return true;
            }
        });
    }
    return {
        title,
        desc
    };
})(Article);