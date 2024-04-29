export interface IButton {
    text: string | number,
    isDisabled: boolean,
}

export interface IInput {
    typeInput: string,
    isDisabled: boolean,
    type: string,
    legend: string,
    id: string
    placeholder: string
    inputValue: string
    setInputValue: (e: any) => void
}

export interface IPrimary {
    children: string
    styleButton: string
}

export interface ITabs {
    styleTab: string
    children: string
    isDisabled: boolean
}

export interface ITextArea {
    rows: number
    cols: number
}

export interface IUser {
    username?: string
    initials?: string
}

export interface IOnePageDescription {
    children: any
}

export interface IPostCard {
    "id": number,
    "image"?: string,
    "text"?: string,
    "date"?: string,
    "lesson_num"?: Number,
    "title"?: string,
    "description"?: string,
    "author"?: number
    "component"?: any
}