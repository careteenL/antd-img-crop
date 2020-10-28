import ImgCrop from './antd-img-crop';
import { Upload, Button, message } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
const _judgePic = (file, width, height) => { // 判断图片是否满足规定宽高
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = theFile => {
        const img = new Image()
        img.src = theFile.target.result
        img.onload = _ => {
          if (img.width === width && img.height === height) {
            resolve(true)
            return
          }
          reject(false)
        }
        img.onerror = err => {
          reject(false)
          console.error(err)
        }
      }
    } catch (e) {
      reject(false)
      console.error(e)
    }
  })
};
function App() {
  const maxSize = 10;
  const width = 402;
  const height = 246;
  const props = {
    name: 'image',
    action: '//dsp-project-manage.focus-test.cn/backend/dist/image/upload',
    data: { type: 20 },
    showUploadList: false,
    beforeUpload: async (file) => {
      console.log(file, 'file')
      if (!['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        message.error('图片格式有误，限制jpeg、png、jpg格式');
        return false;
      }
      if (file.size > maxSize * 1024 * 1024) {
        message.error(`图片大小有误，限制${maxSize}M以内`);
        return false;
      }
      if ((String(file.type).toLowerCase() === 'image/gif')) {
        return _judgePic(file, width, height)
      }
      return true
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const beforeCrop = async (file) => {
    console.log(file, 'file crop')
    if ((String(file.type).toLowerCase() === 'image/gif')) {
      const flag = await _judgePic(file, width, height)
      if (flag) {
        return true
      } else {
        message.error(`请上传尺寸为${width}x${height}的gif`)
        return false;
      }
    } else {
      return true
    }
  }
  const onError = (error) => {
    console.log(error)
    message.error('上传失败')
  }
  return (
    <div className="App">
      <header className="App-header">
        <ImgCrop onError={onError} beforeCrop={beforeCrop} aspect={1} >
          <Upload {...props}>
            <Button>Click to Upload</Button>
          </Upload>
        </ImgCrop>
      </header>
    </div>
  );
}

export default App;
