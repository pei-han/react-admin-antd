// 布局
import React from 'react'

import { padding, margin } from 'polished'
import elf from '../../../elf'

import SiderContainers from './SiderContainers'
import HeaderContainers from './HeaderContainers'
import TabsContainers from './TabsContainers'

// Antd 布局组件
import { Layout } from 'antd'
const { Header, Sider, Content, Footer } = Layout

class LayoutContainers extends React.Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render () {
        const { route } = this.props

        return (
            <Layout>
                {/* 侧导航 */}
                <Sider
                    trigger={ null }
                    collapsible
                    collapsed={ this.state.collapsed }
                    width= {'230px'}
                    style={{
                        flex: '0 0 230px',
                        height: '100vh',
                        backgroundColor: elf.c.dark
                    }}
                >
                    <div className="logo" />
                    <SiderContainers />
                </Sider>

                {/* 内容部分 */}
                <Layout>
                    {/* 顶部 */}
                    <Header
                        style={{
                            background: '#fff',
                            ...padding('0', '0', '0', elf.f.title)
                        }}
                    >
                        {/*
                            <Icon
                                className="trigger"
                                type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' }
                                onClick={ this.toggle }
                            />
                        */}
                        <HeaderContainers />
                    </Header>

                    {/* 内容 */}
                    <Content
                        style={{
                            ...margin(elf.f.title, elf.f.title, null, elf.f.title)
                        }}
                    >
                        {/* 无状态组件, 传递 props: route */}
                        {/* <MainContent route={ route } /> */}
                        <TabsContainers route={ route } />
                    </Content>

                    {/* 底部 */}
                    <Footer
                        style={{
                            textAlign: 'center',
                            padding: elf.f.assist
                        }}
                    >
                        长江中心 PMS 物业管理系统 ©2016 Created by 上朝科技
                    </Footer>
                </Layout>
                {/* 样式描述 */}
                <style>
                    {`
                    `}
                </style>
            </Layout>
        )
    }
}

export default LayoutContainers