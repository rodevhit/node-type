import { parse, UrlWithStringQuery } from "url";

export class Utils {
    
    public static getUrlPath(url : string | undefined) : string {
        console.log(url);
        if(url){
            const pathUrl = parse(url);
            return pathUrl.pathname!.split('/')[1];
        }else{
            return '';
        }
                
    }
}