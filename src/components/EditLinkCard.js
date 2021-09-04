import { Card, Input } from 'antd';
import {EditOutlined, SaveTwoTone, DeleteTwoTone } from '@ant-design/icons'

const LinkCard = () => {

  return (
    <Card bordered={false} style={{ width: "100%" }} className="mt-3">
      <div style={{display: "flex"}}>
        <Input
          placeholder="Title"
          bordered={false}
          // value={}
        />
        <EditOutlined />
      </div>
      <div style={{display: "flex"}}>
        <Input
          placeholder="Url"
          bordered={false}
          // value={}
        />
        <EditOutlined />
      </div>
      <DeleteTwoTone className="pl-2 float-right" twoToneColor="#FF0000" />
    </Card>
  )
}

export default LinkCard