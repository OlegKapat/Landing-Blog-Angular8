

export interface Article{
  id?:string,
  url?:string,
  title:string,
  text:string,
  author:string,
  date:Date
}
export interface User{
  email:string,
  password:string,
  returnSecureToken?:boolean
}
export interface FbAuthResponse{
  idToken:string,
  expiresIn:string
}
export interface CreateResponse{
  name:string
}
export type AlertType="success"|"warning"|"danger"

export interface Alert{
  type:AlertType;
  text:string;
}
