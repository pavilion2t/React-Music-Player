import React from 'react';
import { render } from 'react-dom';
//浏览器自动刷新
import { AppContainer } from 'react-hot-loader';
import Root from './Root';


render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);
//浏览器 自动更新数据相关配置，不会刷新浏览器
if (module.hot) {
    module.hot.accept('./Root', () => {
        const NewRoot = require('./Root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
