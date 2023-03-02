export const formatDateDDMMYYYY = (oldFormat) => {
    const newDate = new Date(oldFormat)
    const options = {
        year: 'numeric',
        month: 'numeric',
        dat: 'numeric'
    }
    return newDate.toLocaleDateString('en-En', options)
}