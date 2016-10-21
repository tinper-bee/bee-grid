# bee-grid
[![npm version](https://img.shields.io/npm/v/bee-grid.svg)](https://www.npmjs.com/package/bee-grid)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-grid)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-grid.svg)](https://david-dm.org/tinper-bee/bee-grid#info=devDependencies)


react bee-grid component for tinper-bee

栅格布局组件，包含container,row和col

## 使用方法

#### 下载npm包

```
npm install --save bee-grid
```

```js
import { Con, Row, Col } from 'bee-grid';

ReactDOM.render(
    <Con>
        <Row>
            <Col md={6} >
            </Col>
        </Row>
    </Con>,
    document.body);

```

#### 样式引入

- 可以使用link引入build目录下bee-grid.css
```
<link rel="stylesheet" href="./node_modules/build/bee-grid.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Grid.scss"
//或是
import "./node_modules/build/bee-grid.css"
```



## API

### Con组件

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|componentClass|组件根元素|element/ReactElement|div|
|fluid|是否为非定宽|boolean|false|

### Row组件

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|componentClass|组件根元素|element/ReactElement|div|

### Col组件

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|xs|移动设备显示列数(<768px)|number|-|
|sm|小屏幕桌面设备显示列数(≥768px)|number|-|
|md|中等屏幕设备显示列数(≥992px)|number|-|
|lg|大屏幕设备显示列数(≥1200px)|number|-|
|xsPull|移动屏幕设备到右边距列数|number|-|
|smPull|小屏幕设备到右边距列数|number|-|
|mdPull|中等屏幕设备到右边距列数|number|-|
|lgPull|大屏幕设备到右边距列数|number|-|
|xsPush|移动屏幕设备到左边距列数|number|-|
|smPush|小屏幕设备到左边距列数|number|-|
|mdPush|中等屏幕设备到左边距列数|number|-|
|lgPush|大屏幕设备到左边距列数|number|-|
|xsOffset|移动设备偏移列数|number|-|
|smOffset|小屏幕设备偏移列数|number|-|
|mdOffset|中等屏幕设备偏移列数|number|-|
|lgOffset|大屏幕设备偏移列数|number|-|
|componentClass|组件根元素|element/ReactElement|div|

以上列数设置，只能设置1-12的数字。

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-col
$ cd bee-grid
$ npm install
$ npm run dev
```
