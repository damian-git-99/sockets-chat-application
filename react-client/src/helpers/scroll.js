import { animateScroll } from 'react-scroll'

export const scrollToBottom = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 25
  })
}
