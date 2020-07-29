//基础路径
import { apiB } from 'rootUtils/api'
const api = {
  // TODO 测试接口, 请删除
  testList: projectId => `${apiB}/${projectId}/notice/list`
}
export default api
