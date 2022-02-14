export const goToHomePage = (history) => {
    history.push("/")
}

export const goToDetailPage = (history, name) => {
    history.push(`/detalhe/${name}`)
}