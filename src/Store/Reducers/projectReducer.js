const initState = {
    projects: [
        {id: 1, title: 'pro 1', content: 'blah blah blah blah blah'},
        {id: 2, title: 'pro 2', content: 'blah blah blah blah blah'},
        {id: 3, title: 'pro 3', content: 'blah blah blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error', action.err)
            return state;
        default: 
            return state;
    }
}

export default projectReducer;