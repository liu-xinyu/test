// 导入axios实例
import httpRequest from '../utils/request'

// 定义接口的传参
interface UserInfoParam {
	money: string,
	remark: string
}

// 获取用户信息
export function createBill(param: UserInfoParam) {
    return httpRequest({
		url: '/createBill',
		method: 'post',
		data: param,
	})
}
