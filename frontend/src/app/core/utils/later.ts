// execute something after delay (milliseconds)
export function later(delay: number) {
    return new Promise(resolve => {
        window.setTimeout(resolve, delay)
    })
}