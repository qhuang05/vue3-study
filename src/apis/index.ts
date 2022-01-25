import request from '@/utils/request'
import qs from 'qs'

export function getQrcode(params: Object) {
  return request({
    url: "/frontend/create/getQrcode",
    method: "get",
    params,
  });
}
