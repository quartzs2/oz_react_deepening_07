function getTimeStr(date) {
  const [hour, minute, second] = date
    .toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    .split(':');

  return `${hour}시${minute}분${second}초`;
}

export default getTimeStr;
