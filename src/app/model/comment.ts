import {IContent} from "./content"
export interface IComment{
    id:string;
    user_id:string;
    post_id:string;
    content:IContent;
}