//基础路径
import { replaceBaseApi } from 'rootUtils/api'
const api = {
  // TODO 测试接口, 请删除
  testList: projectId => `${replaceBaseApi}/${projectId}/notice/list`
}
export default api
