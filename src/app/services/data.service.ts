import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/Operator/catch';


import { HttpClient } from "selenium-webdriver/http";
import { AppError } from '../apperror/app.error';

export class DataService{
    constructor(private url:string , private http:Http){

    }

    getAll(){
        return this.http.get(this.url).map(res=>{ return res.json()})
                                      .catch(this.handleError)  
    }

    delete(resource){
        return this.http.delete(this.url + "/" + resource).map(res=>{ return res.json()})
                                      .catch(this.handleError)  

    }

    create(resource){
        return this.http.post(this.url,resource).map(res=>{ return res.json()})
                                      .catch(this.handleError)  

    }

    update(resource){
        return this.http.put(this.url,resource).map(res=>{ return res.json()})
                                      .catch(this.handleError)  

    }

    handleError(err:Response){
        return Observable.throw(new AppError);
    }
}