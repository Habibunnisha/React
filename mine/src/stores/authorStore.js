import {EventEmitter} from 'events'
import appDispatcher from '../dispatcher/appDispatcher'

class authorStore extends EventEmitter{
    constructor(){
        super()
        this.authors=[
            {
                authorName:'samuel'
            },{
                authorName:'Michel'
            }
        ]
    }
    createAuthor(authorName){
        this.authors.push((authorName));
        this.emit("change");
    }
    getAllAuthors(){
        return this.authors
    }
    handleActions(action){
        switch(action.type){
            case "CREATE_AUTHOR":{
                this.createAuthor(action.authorName)
                break;
            }
        }
    }
}
const authorstore=new authorStore();
appDispatcher.register(authorstore.handleActions.bind(authorstore));
export default authorstore