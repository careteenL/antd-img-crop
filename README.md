# antd-img-crop

An image cropper for Ant Design [Upload](https://ant.design/components/upload/).

[![npm](https://img.shields.io/npm/v/antd-img-crop.svg?style=flat-square)](https://www.npmjs.com/package/antd-img-crop)
[![npm](https://img.shields.io/npm/dt/antd-img-crop?style=flat-square)](https://www.npmtrends.com/antd-img-crop)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/antd-img-crop?style=flat-square)](https://bundlephobia.com/result?p=antd-img-crop)
[![GitHub](https://img.shields.io/github/license/careteenL/antd-img-crop?style=flat-square)](https://github.com/careteenL/antd-img-crop/blob/master/LICENSE)

English | [简体中文](./README.zh-CN.md)

## Demo

[Live demo](https://codesandbox.io/s/antd-img-crop-4qoom5p9x4)

## Special

> fork from [antd-img-crop@3.13.1](https://www.npmjs.com/package/antd-img-crop/v/3.13.1) to support [pull/76](https://github.com/nanxiaobei/antd-img-crop/pull/76)、[pull/90](https://github.com/nanxiaobei/antd-img-crop/pull/90)

## Install

```sh
yarn add @careteen/antd-img-crop
```

## Usage

```jsx harmony
import ImgCrop from '@careteen/antd-img-crop';
import { Upload } from 'antd';

const Demo = () => (
  <ImgCrop>
    <Upload>+ Add image</Upload>
  </ImgCrop>
);
```

## Props

| Prop         | Type                 | Default        | Description                                                           |
| ------------ | -------------------- | -------------- | --------------------------------------------------------------------- |
| aspect       | `number`             | `1 / 1`        | Aspect of crop area , `width / height`                                |
| shape        | `string`             | `'rect'`       | Shape of crop area, `'rect'` or `'round'`                             |
| grid         | `boolean`            | `false`        | Show grid of crop area (third-lines)                                  |
| quality      | `number`             | `0.4`          | Image quality, `0 ~ 1`                                                |
| zoom         | `boolean`            | `true`         | Enable zoom for image                                                 |
| rotate       | `boolean`            | `false`        | Enable rotate for image                                               |
| gifCrop      | `boolean`            | `false`        | Enable crop gif                                                       |
| minZoom      | `number`             | `1`            | Minimum zoom factor                                                   |
| maxZoom      | `number`             | `3`            | Maximum zoom factor                                                   |
| modalTitle   | `string`             | `'Edit image'` | Title of modal                                                        |
| modalWidth   | `number` \| `string` | `520`          | Width of modal in pixels number or percentages                        |
| modalOk      | `string`             | `'OK'`         | Text of confirm button of modal                                       |
| modalCancel  | `string`             | `'Cancel'`     | Text of cancel button of modal                                        |
| beforeCrop   | `function`           | -              | Call before modal open, if return `false`, it'll not open             |
| onError      | `function`           | -              | Catch Error                                                           |
| cropperProps | `object`             | -              | Props of [react-easy-crop] (\* [existing props] cannot be overridden) |

## Styles

To prevent overwriting the custom styles to `antd`, `antd-img-crop` does not import the style files of components.

Therefore, if your project configured `babel-plugin-import`, and not use `Modal` or `Slider`, you need to import the styles yourself:

```js
import 'antd/es/modal/style';
import 'antd/es/slider/style';
```

## License

[MIT License](https://github.com/careteenL/antd-img-crop/blob/master/LICENSE) (c) [careteenL](https://mrlee.me/)

[react-easy-crop]: https://github.com/ricardo-ch/react-easy-crop#props
[existing props]: https://github.com/careteenL/antd-img-crop/blob/master/src/index.jsx#L67-L83
