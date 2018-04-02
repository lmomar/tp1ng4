import {Category} from "./category.model";

export class Post{
    id?:number;
    title: string;
    body: Text;
    enabled: boolean;
    created_at: Date;
    category: Category

}