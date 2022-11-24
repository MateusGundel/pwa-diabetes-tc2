export type Message = {
    type: string,
    message: string,
    options?: string[]
}

export type ChatList = Message[]
export type AudioList = string[]