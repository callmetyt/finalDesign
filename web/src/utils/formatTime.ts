function formatTimeToDate(timestamp: number) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatTimeToClock(num: number) {
  const hour = Math.floor(num / 3600);
  const minute = Math.floor((num - hour * 3600) / 60);
  const second = Math.floor(num - hour * 3600 - minute * 60);
  return `${hour}小时${minute}分钟${second}秒`;
}

export { formatTimeToDate, formatTimeToClock };
