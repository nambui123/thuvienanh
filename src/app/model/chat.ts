import {IContent} from "./content";
export interface IChat{
  id:string;
  sender_id:string;
  receiver_id:string;
  content:IContent;
}