import {createStore} from 'redux';

const initState = {
    mode: 'READ',
    welcome_content: {
        title: 'WEB',
        desc : 'Hello WEB'
    },
    selected_content_id : 1,
    max_content_id : 3,
    contents : [
        {id : 1, title: 'HTML', desc: 'HTML is ...'},
        {id : 2, title: 'CSS', desc: 'CSS is ...'},
        {id : 3, title: 'JS', desc: 'JS is ...'}
    ]
};

function reducer(state = initState, action) {
    if(action.type === 'WELCOME') {
        return {...state, mode: action.mode};
    }

    if(action.type ==='READ') {
        return {...state, mode: 'READ', selected_content_id:action.id}
    }

    if(action.type ==='CREATE') {
        return {...state, mode: 'CREATE'}
    }

    if(action.type ==='UPDATE') {
        return {...state, mode: 'UPDATE'}
    }

    if(action.type ==='DELETE') {
        const newContent = state.contents.filter((v) => {
            if(v.id === state.selected_content_id) return false;
            else return true;
        });
        
        return {...state, mode: 'READ', contents: newContent, selected_content_id: 1};
    }

    if(action.type ==='CREATE_PROCESS') {
        const newId = state.max_content_id;
        const newContent = [...state.contents, {id:newId+1, title: action.title, desc: action.desc}];
        
        return {...state, contents: newContent, max_content_id: newId+1, mode: 'READ', selected_content_id: newId+1};   
    }

    if(action.type ==='UPDATE_CONTENT') {
        const newContent = [...state.contents];
        newContent.some((v, i) => {
            if(v.id === action.id) {
                v.title = action.title;
                v.desc = action.desc;
                return true;
            }
        })

        return {...state, contents: newContent, mode: 'READ', selected_content_id: action.id};
    }

    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());