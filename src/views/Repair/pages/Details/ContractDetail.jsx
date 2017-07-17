// 客户管理 - 合同管理 - 合同管理 [详情]
import React from 'react'
import { Row, Col } from 'antd'
import '../../../../style/test.less'


class App extends React.Component {
    render () {
        return (
            <div className="contract">
                <h2>房源信息</h2>
                <Row>
                    <Col span={8}><b>所属楼宇：</b>长江中心A座 </Col>
                    <Col span={8}><b>服务面积：</b>d</Col>
                    <Col span={8}><b>房间别名：</b>123</Col>
                </Row>
                <Row>
                    <Col span={24}><b>房间编号：</b>2301/2302/2303/2305/2306 </Col>
                </Row>
                <div className="wrapbox">
                    <div className="title">
                        客户信息
                    </div>
                    <div className="main">
                        <h3>客户信息 <span className="blue">添加转租信息</span></h3>
                        <Row>
                            <Col span={8}><b>物业客户名称：</b>长江中心A座 </Col>
                            <Col span={8}><b>联系人：</b>对对对</Col>
                            <Col span={8}><b>经理电话：</b>123456789</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>行政电话：</b>123456789 </Col>
                            <Col span={8}><b>财务电话：</b>123456789</Col>
                            <Col span={8}><b>E-mail：</b>123456789@163.com</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>签约日期：</b>2017-7-11 14:17:07 </Col>
                            <Col span={8} />
                            <Col span={8} />
                        </Row>
                        <p className="line" />
                        <h3>转租信息 <span className="green">编辑</span> <span className="red">删除</span></h3>
                        <Row>
                            <Col span={8}><b>租户名称：</b>长江中心A座 </Col>
                            <Col span={8}><b>联系人：</b>对对对</Col>
                            <Col span={8}><b>行政电话：</b>123456789</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>财务电话：</b>123456789 </Col>
                            <Col span={8}><b>经理电话：</b>123456789</Col>
                            <Col span={8}><b>E-mail：</b>123456789@163.com</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>转租周期：</b>2017-7-11 14:17:07 </Col>
                            <Col span={16}><b>转租房间：</b>2301/2302/2303/2305/2306 </Col>
                        </Row>
                    </div>

                </div>
                <div className="wrapbox">
                    <div className="title">
                        日期信息
                    </div>
                    <div className="main">
                        <Row>
                            <Col span={8}><b>服务周期：</b>2015-10-02  ~ 2015-10-10 </Col>
                            <Col span={16}><b>录入时间：</b>王小明      2016-09-26    12:12:12</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>合同编号：</b>ABC-123456789 </Col>
                            <Col span={16}><b>最后修改：</b>王小明      2016-09-26    12:12:12</Col>
                        </Row>
                        <p className="line" />
                        <Row>
                            <Col span={8}><b>终止日期：</b>长江中心A座 </Col>
                            <Col span={16}><b>终止原因：</b>对对对长江中心A座</Col>
                        </Row>
                    </div>
                </div>

                <div className="wrapbox">
                    <div className="title">
                        物业费设置
                    </div>
                    <div className="main">
                        <Row>
                            <Col span={8}><b>物业费单价：</b><em className="color1">4.85</em> 元／㎡/月 </Col>
                            <Col span={16}><b>电费收费方式：</b><em className="color1">峰平谷</em>        单价 <em className="color1">2</em> 元/度  变比 <em className="color1">1</em> 电损比 <em className="color1">10</em>%</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>空调费单价：</b><em className="color1">0.39</em> 元／㎡/月 </Col>
                            <Col span={16}><b>水费收费方式：</b><em className="color1">独立水表</em>     单价 <em className="color1">5.3</em> 元/立方米 耗损比 <em className="color1">10</em>%</Col>
                        </Row>
                        <Row>
                            <Col span={8}><b>电梯费单价：</b><em className="color1">1.35</em> 元／㎡/月 </Col>
                            <Col span={16}><b>能源管理押金：</b><em className="color1">123,456.00</em> 元 （ 业主自交    当前余额：123 元）</Col>
                        </Row>
                        <ul>
                            <li>
                                <b>业主自交房间：</b>
                                2501/2502/25032501/2502/25032501/2502
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="submit">
                    终止合同
                </div>
            </div>
        )
    }
}

export default App


