// 导入axios实例
import httpRequest from '../utils/request'

// 定义接口的传参
interface UserInfoParam {
	user_name: string,
	password: string
}

// 获取用户信息
export function apiGetUserInfo(param: UserInfoParam) {
    return httpRequest({
		url: '/users',
		method: 'post',
		data: param,
	})
}
