import {useState} from 'react'
import { Card, Input } from 'antd';
import {EditOutlined, SaveTwoTone, DeleteTwoTone } from '@ant-design/icons'



const LinkCard = ({linksRef, username}) => {


  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSave = () => {
    const key = linksRef.child(username).push().key;
    const newLink = {
      id: key,
      title: title, 
      url: url
    }

    linksRef.child(username).child(key).update(newLink)
  }

  return (
    <Card bordered={false} style={{ width: "100%" }} className="mt-3">
      <div style={{display: "flex"}}>
        <Input
          placeholder="Title"
          bordered={false}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <EditOutlined />
      </div>
      <div style={{display: "flex"}}>
        <Input
          placeholder="Url"
          bordered={false}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <EditOutlined />
      </div>
      {(title && url ) && <SaveTwoTone onClick={handleSave}/>}

      <DeleteTwoTone className="pl-2 float-right" twoToneColor="#FF0000" />
    </Card>
  )
}

export default LinkCard