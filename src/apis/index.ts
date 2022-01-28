import request from '@/utils/request'
import qs from 'qs'

export function getQrcode(params) {
  return request({
    url: "/frontend/create/getQrcode",
    method: "get",
    params
  });
}

export function categorySaveCancel(params: Object){
  return request({
    url: "/merchant/customerGallery/batchCancelCategory",
    method: "post",
    data: qs.stringify(params)
    // method: "get",
    // params
  });
}