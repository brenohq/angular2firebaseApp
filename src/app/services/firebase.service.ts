import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;

  constructor(private af:AngularFire) { }

  getListings() {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>;

    return this.listing;
  }

}


interface Listing{
  $key?:String;
  title?:String;
  type?:String;
  image?:String;
  city?:String;
  owner?:String;
  bedroms?:String;
}