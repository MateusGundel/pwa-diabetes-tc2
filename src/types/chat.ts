type response = {
    type : 'text';
    response: string;
}

type option = {
    label: string;
    value:string;
}

export type ChatResponse = {
    response: response;
    options?: option[]
}

export type UserMessage = {
    message: string;
}

export type ChatList = (UserMessage | ChatResponse)[]