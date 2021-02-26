/*
 * @Author: your name
 * @Date: 2021-02-25 12:20:14
 * @LastEditTime: 2021-02-26 23:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Upload/demo/upload_demo1.tsx
 */
import React from 'react'
import Upload from 'chicken-design/lib/Upload'
import 'chicken-design/lib/Upload/styles/index'
import Button from 'chicken-design/esm/Button'


export default ()=>
<div
  style={{
    padding: '20px 40px',
    width: '500px'
  }}
>
  <h3>
    组件演示
  </h3>
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="file"
    onChange={function noRefCheck(){}}
    onProgress={function noRefCheck(){}}
    onRemove={function noRefCheck(){}}
    onSuccess={function noRefCheck(){}}
    drag
  >
      拖动上传
  </Upload>
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="file"
    onChange={function noRefCheck(){}}
    onProgress={function noRefCheck(){}}
    onRemove={function noRefCheck(){}}
    onSuccess={function noRefCheck(){}}
  >
    <Button style ={{ marginTop: 30} }>CLick Upload</Button>
  </Upload>
</div>