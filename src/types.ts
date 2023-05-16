export interface message {
    user?: string;
}
  
export interface appMsg {
    message: message;
    say: Function;
}

export interface app{
    message: Function;
}


