import { Injectable } from '@angular/core';
import { Boat } from 'src/model/boat';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private http: HttpClient) { }

  getBoats(): Observable<Boat[]> {

    return this.http.get<Boat[]>(environment.backEnd + '/boat').pipe(
      map(data => data.map(d => new Boat().deserialize(d)))
    );
  }

  getBoat(id: number): Observable<Boat> {
    return this.http.get<Boat>(environment.backEnd + '/boat/detail/'+id).pipe(
      map(data => new Boat().deserialize(data))
    );
  }

  createBoat(b: Boat): Observable<Boat> {
    return this.http.post<Boat>(environment.backEnd + '/boat/createBoat', b).pipe(
      map(data => new Boat().deserialize(data))
    );
  }

  deleteBoat(id: number): Observable<any> {
    return this.http.delete<any>(environment.backEnd + '/boat/delete/' + id).pipe();
  }

  updateBoat(b: Boat): Observable<Boat> {

    return this.http.put<Boat>(environment.backEnd + '/boat/update',b).pipe(
      map(data => new Boat().deserialize(data))
    );

  }

}
