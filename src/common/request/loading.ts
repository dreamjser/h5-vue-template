import { showLoadingToast, closeToast	 } from 'vant'

let loadingCount = 0

export const showLoading = () => {
  loadingCount++
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
}

export const hideLoading = () => {
  loadingCount--
  if (loadingCount <= 0) {
    closeToast()
  }
}
