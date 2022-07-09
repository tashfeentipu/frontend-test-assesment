export const dateConverter = (timeStamp) => {
    const date = new Date(+timeStamp)
    return { date: date.getDate(), month: date.toLocaleString('default', { month: 'short' }) }
}

export const timeConverter = (timeStamp) => {
    const date = new Date(+timeStamp)
    return date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}