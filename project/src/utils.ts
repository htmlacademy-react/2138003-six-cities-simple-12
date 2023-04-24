export default function passValidate(pas:string){
  if(pas.search(/[A-Za-z]/) === -1){
    return false;
  }
  if(pas.search(/[0-9]/) === -1){
    return false;
  }
  return true;
}
