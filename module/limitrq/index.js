const rq = require('./limitrq');


if (rq.checkRequest ('hoadeptrai_or_ipv4')) {
  console.log('Thực hiện request thành công');
} else {
  console.log(`Bạn đã bị chặn, vì giới hạn ${rq.info()['requestperLimit']} requests/${rq.info()['limit_seconds'] / 60} phút`)
}
