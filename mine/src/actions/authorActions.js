import Dispatcher from '../dispatcher/appDispatcher';
export function createAuthor(authorName){
    Dispatcher.dispatch({
        type:"CREATE_AUTHOR",
        authorName
    })
}
export default {createAuthor}