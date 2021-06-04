import { axios } from "../config.js" //导入axios


//获取资讯列表
async function getNewsList() {
    try {
        let result = await axios.get("/news/list");
        return result.data;
    } catch (err) {   //返回Json数据格式要与result.data一致     
        return { code: -1, msg: "异步调用出错了，错误信息：" + err };
    }
}

export { getNewsList }//导出接口名