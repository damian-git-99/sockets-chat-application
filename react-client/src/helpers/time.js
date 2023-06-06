import moment from 'moment'

export const hourMonth = (date) => {
  const newDate = moment(date)
  return newDate.format('HH:mm a | MMMM Do')
}
